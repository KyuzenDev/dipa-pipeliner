import { blogDetail } from "@/data/blog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
    return (
        <div className="w-full py-12 px-4 flex flex-col items-center">
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogDetail.map((item, index) => (
                    <div key={index} className="space-y-3">
                        <Image
                            src={`/content-of-blog/blog-${index + 1}.png`}
                            width={400}
                            height={250}
                            alt={item.title}
                            className="rounded-lg w-full h-52 object-cover"
                        />
                        <div className="text-sm text-gray-500">
                            {item.date} | {item.category}
                        </div>

                        {/* Linked the subcontenent data details*/}
                        <Link href={item.url}>
                            <h3 className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-400">
                                {item.title}
                            </h3>
                        </Link>
                        
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>

            <Button variant="secondary" className="mt-10">
                Load More Blogs
            </Button>
        </div>
    );
}
