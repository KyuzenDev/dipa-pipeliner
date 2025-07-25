import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

export default function BlogBody({ value }: { value: PortableTextBlock[] }) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold mt-10 mb-5">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-medium mt-8 mb-4">{children}</h3>
      ),
      normal: ({ children }) => (
        <p className="text-base leading-relaxed text-grayscale-700 mb-4">
          {children}
        </p>
      ),
    },
  };

  return <PortableText value={value} components={components} />;
}
