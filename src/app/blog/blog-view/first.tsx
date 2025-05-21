import next from "next";
import Image from "next/image";
import Twobar from "@/components/layout/Navbar/Twobar";
import back from "../../../../public/blogs/Back.svg";
import Fico from "../../../../public/CMS/CMS-1.svg";
import Theme from "../blog-head/head";
import Facebook from '../../../../public/footer/facebook.svg'
import Instagram from '../../../../public/footer/instagram.svg';
import Dribbble from '../../../../public/footer/dribbble.svg';
import Linkedin from '../../../../public/footer/linkedin.svg';


export default function Cofi() {
    return (
        <section className="max-w-full w-full h-[3427px] flex flex-col items-center justify-top gap-[20px]">
            <Twobar />
            <div className="w-[800px] h-[2000px] border-b py-[64px] px-[60px] gap-[40px] flex flex-col justify-top items-left">
                <div className="w-[720px h-[189px] gap-[18px] flex flex-col justify-between items-left">
                    <Image src={back} alt="polinter" />
                    <Theme head="How to Choose the Right CRM for Your Personal and Business" date="April 28, 2025" gol="Product" />
                </div>
                <Image src={Fico} alt="bagan" className="w-full h-[400px] rounded-4 mr-30" />
                <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700">
                    In 2025, <a href="#" className="text-xl font-medium text-gray-900 font-sans"><u>Customer Relationship Management (CRM)</u></a> is poised for some thrilling
                    changes. With the rapid rise of generative AI, shifting business dynamics, and an
                    increasing focus on post-sales support, CRM is evolving to be faster and flexible.
                </p>
                <div className="w-full h-[132px] gap-[32px] flex flex-col items-left justify-center">
                    <h2 className="font-semibold text-2xl text-gray-900">The Game Changer For CRM</h2>
                    <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700">
                        By 2025, AI-powered CRMs won’t just store data they’ll write follow-ups, summarize
                        meetings, track interactions, and predict customer needs. What was once a bonus
                        will soon be essential. These AI-driven features will shift from nice-to-have.
                    </p>
                </div>
                <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700">
                    Think about it automated meeting summaries, email drafting, and activity tracking
                    will soon be the new standard. This means sales teams can say goodbye to hours
                    spent on repetitive tasks like data entry and instead focus on selling.
                </p>
                <div className="w-full h-[132px] gap-[32px] flex flex-col items-left justify-center mt-20">
                    <h2 className="font-semibold text-2xl text-gray-900">A New Focus For CRM</h2>
                    <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700">
                        By 2025, the biggest shift in CRM is the growing focus on the post-sales memory,
                        CRMs are no longer just for closing deals—they’re evolving to support the entire
                        customer journey, from first touch to long-term retention.
                        <br /> <br />
                        • Pipeliner are evolving beyond just sales tools <br />
                        • The post-sales experience is becoming a priority <br />
                        • Pipeliner will manage the full customer journey
                    </p>
                </div>
                <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700 mt-20">
                    The future of CRM isn’t just about tracking interactions; it’s about enhancing those
                    interactions through smart, user-friendly, and secure solutions that benefit both
                    businesses and customers.
                </p>
                <div className="w-full h-[132px] gap-[32px] flex flex-col items-left justify-center">
                    <h2 className="font-semibold text-2xl text-gray-900">Smaller Vendors On The Rise</h2>
                    <p className="w-full height-[87px] font-normal text-lg leading-[35px] text-gray-700">
                        AI isn’t the only force transforming CRM smaller vendors are gaining ground, offering
                        flexible, user-friendly solutions that rival legacy systems. Once focused on SMBs,
                        these new players are now <text className="text-gray-900"><a href="#"><u>ready to meet enterprise</u></a></text> demands with integration.
                    </p>
                </div>
                <div className="flex flex-col justify-left items-left gap-[20px]">
                    <p className="text-gray-500 font-normal text-large text-left">Share post on</p>
                    <div className="w-45 h-6 gap-2 flex flex-row justify-beetwen items-center">
                        <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300 cursor-pointer">
                            <Image src={Facebook} alt="facebook" />
                        </button>
                        <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300 cursor-pointer">
                            <Image src={Instagram} alt="instagram" />
                        </button>
                        <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300 cursor-pointer">
                            <Image src={Dribbble} alt="dribbble" />
                        </button>
                        <button className="w-10 h-10 p-2 justify-center items-center rounded-[5px] bg-gray-300 cursor-pointer">
                            <Image src={Linkedin} alt="linkedin" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-[104px] border-b border-gray-500 px-15 gap-[10px] bg-white"></div>
        </section>
    )
}