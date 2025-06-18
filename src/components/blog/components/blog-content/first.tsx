import CTA from "@/components/CTA";
import TopNavbar from "@/components/TopNavbar";
import SubBlog from "../blogdetails/headerblogdetail";
import Image from "next/image";
import ContentBlogDetail from "../blogdetails/contentblogdetail";
import BlogCard from "../blogContent";
import Firsto from "../../../../../public/content-of-blog/blog-1.png"

export default function FirstPage() {
    return (
        <section className="max-w-full w-full">
            <div className="w-full border-b border-white py-15 px-15 gap-10 flex flex-col justify-center items-center">
                <SubBlog
                    title="How to Choose the Right CRM for Your Personal and Business"
                    date="April 24, 2025"
                    detail="Customers"
                />
                <Image src={Firsto} alt="photos"></Image>
                <ContentBlogDetail/>
                <BlogCard/>
            </div>
            <CTA />
        </section>
    )
}