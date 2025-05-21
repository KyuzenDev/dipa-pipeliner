import Image from "next/image"
import Link from "next/link"
import MassageIcon from '../../../../public/formulir/massages.svg'
import AskIcon from '../../../../public/formulir/Asked.svg'

export default function Support() {
    return (
        <section className="flex flex-col justify-between items-center w-[364px] h-[426px] gap-[24px]">
            <div className="flex flex-col justify-left items-left w-full h-[201px] rounded-[20px] border-3 p-[24px] border-white bg-white gap-[16px]">
                <Image src={MassageIcon} alt="massage" />
                <div className="flex flex-col justify-left items-left w-[316px] h-[52px] gap-1">
                    <h6 className="w-full h-[27px] font-sans font-medium text-large leading-[24px] text-gray-900">Open Live Chat</h6>
                    <p className="w-full h-[21px] font-sans font-normal text-sm leading-[24px] text-gray-600">Talk to our customer support.</p>
                </div>
                <Link href="#"><u className="w-full font-sans font-medium text-sm leading-[24px]">Send Message</u></Link>
            </div>
            <div className="flex flex-col justify-left items-left w-full h-[201px] rounded-[20px] border-3 p-[24px] border-white bg-white gap-[16px]">
                <Image src={AskIcon} alt="asked" />
                <div className="flex flex-col justify-left items-left w-[316px] h-[52px] gap-1">
                    <h6 className="w-full h-[27px] font-sans font-medium text-large leading-[24px] text-gray-900">Read FAQs</h6>
                    <p className="w-full h-[21px] font-sans font-normal text-sm leading-[24px] text-gray-600">Browse our general questions.</p>
                </div>
                <Link href="#"><u className="w-full font-sans font-medium text-sm leading-[24px]">Find Out More</u></Link>
            </div>
        </section>
    )
}