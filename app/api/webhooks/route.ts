import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser } from '@/actions/user.actions';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET to .env.local');
  }

  const wh = new Webhook(SIGNING_SECRET);
  const headerPayload = await headers();

  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error: Verification failed', { status: 400 });
  }

  if (evt.type === 'user.created') {
    console.log(evt.data)
    const { id, first_name, last_name, email_addresses } = evt.data;

    try {
      await createUser({
        firstName: first_name || '',
        lastName: last_name || '',
        email: email_addresses[0]?.email_address || '',
        password: '', // Clerk handles passwords securely
        dateOfBirth: new Date(), // Replace if birthdate is provided
        role: 'user',
      });
      console.log(`User with ID ${id} synced to database.`);
    } catch (error) {
      console.error('Error creating user in database:', error);
      return new Response('Error: Database insertion failed', { status: 500 });
    }
  }

  return new Response('Webhook processed successfully', { status: 200 });
}
