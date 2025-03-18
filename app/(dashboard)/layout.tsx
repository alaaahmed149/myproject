import type { Metadata } from "next";
import { roboto } from "../fonts";
import "@/app/globals.css";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidemenu";
import Providers from "../features/auth/Providers";

export const metadata: Metadata = {
  title: "OrdersM. | Dashboard",
};

export default function DashboardLayout({
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
        <Providers>
          <div className="flex w-full h-screen">
            {/* sideMenu */}
            <Sidemenu />
            {/* navBar + mainPart */}
            <div className="w-[80%] xl:w-[80%] lg:w-[82%] md:w-[90%] flex flex-col">
              <Navbar />
              <main className="main-box-shadow h-screen rounded-2xl mx-2 bg-gray-50 p-5 overflow-scroll">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
