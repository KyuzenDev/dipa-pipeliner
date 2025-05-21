import Image from "next/image";

export type Drove = {
    persentation: string;
    icons: string;
    title: string;
    description: string;
}

export const drove: Drove[] = [
    {
        persentation: '100%',
        icons: 'public/about-icon-smell/swing.svg',
        title: 'Put Relationships',
        description: 'We create meaningful experiences that prioritize people their needs.'
    },
    {
        persentation: '150K',
        icons: 'public/about-icon-smell/cruss.svg',
        title: 'Data On Records',
        description: 'We empower best businesses with accurate actionable insights always.'
    },
    {
        persentation: '200+',
        icons: 'public/about-icon-smell/diamond.svg',
        title: 'Simplify Workflows',
        description: 'We reduce complexity so teams can focus on what matters most results.'
    } 
]

export function Drive() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {drove.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-semibold">{item.persentation}</span>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Image
                  src={item.icons}
                  alt={item.title}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.description}</p>
            <div className="text-sm text-blue-500 flex items-center gap-1 cursor-pointer">
              Learn more <span>→</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  