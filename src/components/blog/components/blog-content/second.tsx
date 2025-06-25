import CTA from "@/components/CTA";
import TopNavbar from "@/components/TopNavbar";
import SubBlog from "../blogdetails/headerblogdetail";
import Image from "next/image";
import ContentBlogDetail from "../blogdetails/contentblogdetail";
import BlogCard from "../blogContent";

export default function DosPage() {
    return (
        <section className="max-w-full w-full bg-white">
            <div className="w-full border-b border-white py-15 px-15 gap-10 flex flex-col justify-center items-center">
                <SubBlog
                    title="The Future of CRM: Trends to Now Companies Watch in 2025"
                    date="April 26, 2025"
                    detail="Companies"
                />
                <Image src="/content-of-blog/blog-2.png" alt="photos"></Image>
                <ContentBlogDetail/>
                <BlogCard/>
            </div>
            <CTA />
        </section>
    )
}