import AccordionItem from "@/components/ui/accordionitem";
import next from "next";

export type items AFA = {
  title: string;
  content: string;
  link: string;
}

const items AFA = [
  {
    title: "What is Pipeliner?",
    content: "Designed for today’s fast-moving teams, Pipeliner is a CRM that bends to your needs. Its flexible data model and easy-to-build workflows let you shape the platform around your GTM...",
    link: "#"
  },
  {
    title: "Manage Member, Workspace, and Billing",
    content: "Learn how to manage users, set up workspaces, and handle your billing preferences efficiently.",
    link: "#"
  },
  {
    title: "How to Navigate and Build Workflows?",
    content: "Understand how to use the workflow builder, navigate modules, and automate your CRM processes.",
    link: "#"
  },
  {
    title: "Can Pipeliner in Dark Mode?",
    content: "Yes! Enable dark mode from your profile settings for a more comfortable viewing experience.",
    link: "#"
  },
  {
    title: "Import & Export My Data in Pipeliner",
    content: "You can import data from CSVs and export filtered reports or full datasets with ease.",
    link: "#"
  },
  {
    title: "Pipeliner Chrome Extension",
    content: "Access and manage your workspace from anywhere on the web or Gmail with the Pipeliner Chrome extension...",
    link: "#",
  },
];

export default function AccordionList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          link={item.link}
        />
      ))}
    </div>
  );
}
