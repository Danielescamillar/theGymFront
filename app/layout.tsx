'use client'
import "../src/index.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import TanstackProvider from '../src/components/providers/TanstackProvider'



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body className={`bg-black`}>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
