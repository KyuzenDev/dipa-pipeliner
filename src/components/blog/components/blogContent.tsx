import { blogDetail } from "@/data/blog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlogCard() {
    return (
        <div className="max-w-full w-full px-15 justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
                {blogDetail.map((item, index) => (
                    <div key={index} className="space-y-3">
                        <Image src={item.photos.replace('/public,', '/')} alt={item.title} className="rounded-lg w-full h-52 object-cover" />
                        <div className="text-sm text-gray-500">{item.date}  •  {item.category}</div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm"></p>
                    </div>
                ))}
            </div>

            <Button variant="secondary" className="m-auto">Load More Blogs</Button>
        </div>
    );
}
