'use client';
import { Header } from '@/components/Header';
import { SummaryTable } from '@/components/SummaryTable';
// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Header />
      <SummaryTable />
    </main>
  );
}
