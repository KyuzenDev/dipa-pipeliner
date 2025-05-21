import Twobar from "@/components/layout/Navbar/Twobar"
import CMSH from "@/components/layout/Header/CMSHeader"
import Footer from "@/components/layout/Footer/Footer"
import BlogCard from "@/components/content/cms"
// import CTA from "@/components/layout/CTA/CTA"

export default function Blog() {
    return (
        <section className="max-w- w-full h-[1900px] bg-white flex flex-col justify-between items-center gap-2">
            <Twobar/>
            <CMSH/>
            <BlogCard/>
            <Footer/>
        </section>
    )
}