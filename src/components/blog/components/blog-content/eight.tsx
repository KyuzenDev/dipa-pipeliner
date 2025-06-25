import CTA from "@/components/CTA";
import SubBlog from "../blogdetails/headerblogdetail";
import Image from "next/image";
import ContentBlogDetail from "../blogdetails/contentblogdetail";
import BlogCard from "../blogContent";

export default function EightPage() {
    return (
        <section className="max-w-full w-full bg-white">
            <div className="w-full border-b border-white py-15 px-15 gap-10 flex flex-col justify-center items-center">
                <SubBlog
                    title="See Real-Life CRM Setups from Good Modern Pipeliner Teams"
                    date="April 10, 2025"
                    detail="Companies"
                />
                <Image src="/content-of-blog/blog-8.png" alt="photos"></Image>
                <ContentBlogDetail/>
                <BlogCard/>
            </div>
            <CTA />
        </section>
    )
}