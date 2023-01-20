import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-background w-screen h-screen flex justify-center items-center text-white">
        <div className="w-full max-w-5xl px-6 gap-16 ">{children}</div>
      </body>
    </html>
  );
}
