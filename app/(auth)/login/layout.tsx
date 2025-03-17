import { Metadata } from "next";
import React from "react";
import Providers from "@/app/features/auth/Providers";
import '@/app/globals.css';
export const metadata: Metadata = {
  title: "OrdersM. | Login",
};
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
