'use client';
import { Header } from '@/components/Header';
// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <h1 className="text-2xl">NLW SETUP</h1>
    </main>
  );
}
