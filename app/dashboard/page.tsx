import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session?.sessionId) {
    return redirect('/');
  } else {
    redirect('/dashboard/overview');
  }
}
