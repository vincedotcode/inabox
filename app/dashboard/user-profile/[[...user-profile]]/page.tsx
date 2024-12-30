import { SearchParams } from 'nuqs/parsers';
import { UserProfile } from '@clerk/nextjs'

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: pageProps) {
  return <UserProfile />;
}
