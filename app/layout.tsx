'use client'

import { Suspense } from 'react';
import '../styles/globals.css'
import Loading from './loading'

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Loading />
          {children}
      </body>
    </html>
  );
}