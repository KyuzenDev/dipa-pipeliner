'use client'
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter_Tight({
  subsets: ["latin"],
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <html lang="en">
      <Head>
        <title>Pipeliner</title>
        <meta name="description" content="Platform CRM modern dan mudah digunakan" />
      </Head>
      <body
        className={inter.className}
      >
        <main className="w-full min-h-screen">
          {isHomePage && (
            <div className="relative w-full h-full">
              <div className="absolute bg-gradient-custom inset-0 backdrop-blur-md h-screen max-h-[70vh] z-[-10]">
                <div className="absolute w-full h-full shadow-blur z-[-5]"></div>
              </div>
            </div>
          )}
          <TopNavbar />
          <div className="w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
