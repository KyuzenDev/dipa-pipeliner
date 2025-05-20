"use client";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between w-full">
      <div className="relative w-full h-full">
        <div className="absolute bg-gradient-custom inset-0 backdrop-blur-md h-screen max-h-[70vh] z-[-10]">
          <div className="absolute w-full h-full shadow-blur z-[-5]">&nbsp;</div>
        </div>
      </div>

      <TopNavbar />
      <div className="w-full max-w-7xl px-4 py-6">{children}</div>
      <Footer />
    </main>
  );
}
