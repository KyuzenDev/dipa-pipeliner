"use client";
import TopNavbar from "@/components/TopNavbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Gradient utama */}
      <div className="flex flex-col w-full relative">
        <div className="absolute bg-gradient-to-r from-[#D9F8C0] to-[#88CCF8] w-full  backdrop-blur-md h-screen max-h-[50vh] z-[-2]"></div>
        {/* Blur tambahan di bawah gradient */}
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#D9F8C0] to-transparent z-[-1]"></div>
      </div>

      <TopNavbar />
      <div className="w-full max-w-7xl px-4 py-6">{children}</div>
    </main>
  );
}
