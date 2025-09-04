import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from 'react-toastify'
import { Providers } from "./components/authentication/Providers";




export const metadata: Metadata = {
  title: "Bookify",
  description: "Top books for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"bg-gradient-to-r from-black via-gray-900 to-black min-h-screen"}
      >
        <Providers>
          {children}
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
