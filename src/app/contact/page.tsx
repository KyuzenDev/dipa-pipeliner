import Footer from "@/components/layout/Footer/Footer";
import Bodies from "./container-grup/bodies";
import Twobar from "@/components/layout/Navbar/Twobar";

export default function Contact() {
    return (
        <div className="flex flex-col w-full">
            <Twobar/>
            <Bodies/>
            <Footer/>
        </div>
    )
}