import TopNavbar from "@/components/TopNavbar";

export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between bg-neutral-50">
      <TopNavbar />
      <div className="w-full max-w-7xl px-4 py-6">
        {children}
      </div>
    </main>
  );
}