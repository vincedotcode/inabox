import { Metadata } from 'next';
import SignUpViewPage from '@/components/auth/signup-view';

export const metadata: Metadata = {
  title: 'Authentication | Sign Up',
  description: 'Sign Up page for Inabox.'
};

export default function Page() {
  return <SignUpViewPage />;
}
