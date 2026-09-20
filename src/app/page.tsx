import { getSiteData } from '@/lib/db';
import HomePage from '@/components/HomePage';

export const revalidate = 0;

export default function Page() {
  const data = getSiteData();
  return <HomePage initialData={data} />;
}
