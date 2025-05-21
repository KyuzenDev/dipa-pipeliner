import { FormEvent } from "react";
import Milo from '../../../../public/formulir/Mailogo.svg'
import Image from "next/image";
import { Input } from "../../../components/ui/input";

export default function Form() {
    return (
        <section className="flex flex-col justify-between items-center max-w-[364px] w-full h-[531px] rounded-[20px] border-1 p-6 gap-2 bg-white border-gray-300">
            <Image src={Milo} alt="milos"></Image>
            <div className="mt-2 mb-2 flex flex-col justify-between items-center bg-trasparent gap-4">
                <div className="flex flex-col jsutify-left items-center gap-3">
                    <text className="w-79 h-[21px] font-sans font-normal leading-6">Full Name</text>
                    <Input type="text" placeholder="Enter your name"/>
                </div>
                <div className="flex flex-col jsutify-left items-center gap-3">
                    <text className="w-79 h-[21px] font-sans font-normal leading-6">Email Address</text>
                    <Input type="text" placeholder="Enter email"/>
                </div>
                <div className="flex flex-col jsutify-left items-center gap-3">
                    <text className="w-79 h-[21px] font-sans font-normal leading-6">Messages</text>
                    <input 
                       className="w-79 h-30 rounded-[10px] px-4 py-3 gap-[10px] bg-gray-200 text-gray-500 font-sans font-normal text-base leading-6"
                       type="text" 
                       id="name"
                       placeholder="Enter Messages"
                    />
                </div>
            </div>
            <button className="w-79 h-12 rounded-[10px] px-[17.5px] gap-2 bg-gradient-to-t from-black via-gray-900 to-gray-700 text-center font-medium text-base leading-6 text-white cursor-pointer">Send Messages</button>
        </section>
    )
}