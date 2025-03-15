import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";

export const metadata: Metadata = {
  title: "OrdersM. | Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${roboto} antialiased`}>
        <div className="flex w-full h-screen">
          {/* sideMenu */}
          <Sidemenu />
          {/* navBar + mainPart */}
          <div className="w-[80%] xl:w-[80%] lg:w-[82%] md:w-[90%] flex flex-col">
            <Navbar />
            <main className="main-box-shadow h-screen rounded-2xl mx-3 bg-gray-50">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
