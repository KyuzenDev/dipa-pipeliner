import { Badge } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Formula() {
    return (
        <section className="max-w-full w-full border-b px-16 pb-28 pt-16 gap-16 bg-white flex flex-col">
            <div className="w-full flex flex-col gap-4">
                <Badge>Contact</Badge>
                <h2 className="font-sans font-semibold text-2xl leading-[120%] text-gray-900">Support Center</h2>
                <p className="font-sans font-normal text-base leading-[150%] text-gray-700">Reach out to us if you had common problems and questions.</p>
            </div>

            <div className="m-auto w-[752px] flex flex-row gap-6">
                <div className="flex flex-col w-[364px] gap-6">
                    <div className="w-full rounded-2xl border-3 p-6 gap-4 border-white bg-white">
                        <Image src="" alt=""></Image>
                        <div className="w-[316px] gap-1">
                            <p className="font-sans font-medium text-lg text-gray-900 leading-[150%]">Open Live Chat</p>
                            <text className="font-sans font-normal text-sm text-gray-600 leading-[150%]">Talk to our customer support.</text>
                        </div>
                        <u className="font-sans font-medium text-sm text-gray-600 leading-[150%]">Send Message</u>
                    </div>
                    <div className="w-full rounded-2xl border-3 p-6 gap-4 border-white bg-white">
                        <Image src="" alt=""></Image>
                        <div className="w-[316px] gap-1">
                            <p className="font-sans font-medium text-lg text-gray-900 leading-[150%]">Read FAQs</p>
                            <text className="font-sans font-normal text-sm text-gray-600 leading-[150%]">Browse our general questions.</text>
                        </div>
                        <u className="font-sans font-medium text-sm text-gray-600 leading-[150%]">Find Out More</u>
                    </div>
                </div>

                <div className="flex flex-col w-[364px] rounded-2xl border-1 gap-6 p-6 bg-white">
                    <Image src='' alt=''></Image>
                    <div className="w-full flex flex-col">
                        <p className="font-sans font-normal text-sm leading-[150%] text-gray-500">Full Name</p><span className="text-red-500">*</span>
                        <Input type="text" placeholder="Enter name" className="rounded-xl py-3 px-4 gap-2 bg-gray-200 h-12"></Input>
                    </div>
                    <div className="w-full flex flex-col">
                        <p className="font-sans font-normal text-sm leading-[150%] text-gray-500">Email Address</p><span className="text-red-500">*</span>
                        <Input type="text" placeholder="Enter email" className="rounded-xl py-3 px-4 gap-2 bg-gray-200 h-12"></Input>
                    </div>
                    <div className="w-full flex flex-col">
                        <p className="font-sans font-normal text-sm leading-[150%] text-gray-500">Messages</p><span className="text-red-500">*</span>
                        <Input type="text" placeholder="Enter message" className="rounded-xl py-3 px-4 gap-2 bg-gray-200 h-30"></Input>
                    </div>
                    <Button className="w-full px-[18px] gap-2 border-1 rounded-[10px] border-white text-white font-sans justify-center items-center text-center">Send Messages</Button>
                </div>
            </div>
        </section>
    )
}