export default function TemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between bg-neutral-50">
      {children}
    </main>
  );
}
