import Formula from "@/components/contact-us/formulir/form-pengisian"
import TopNavbar from "@/components/TopNavbar"
import Footer from "@/components/Footer"

export default function ContactUs() {
    return (
        <div className="max-w-full flex flex-col">
            <TopNavbar/>
            <Formula/>
            <Footer/>
        </div>
    )
}