'use client'
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

const inter = Inter_Tight({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <main className="flex flex-col items-center justify-between w-full">
          <div className="relative w-full h-full">
            <div className="absolute bg-gradient-custom inset-0 backdrop-blur-md h-screen max-h-[70vh] z-[-10]">
              <div className="absolute w-full h-full shadow-blur z-[-5]"></div>
            </div>
          </div>

          <TopNavbar />
          <div className="w-full max-w-7xl py-12">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
