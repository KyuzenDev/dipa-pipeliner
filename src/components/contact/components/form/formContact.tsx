import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function FormContact() {
    return (
        <div className="max-w-full w-full px-6 md:px-16 pb-16 md:pb-28 pt-10 md:pt-16 gap-8 md:gap-16 bg-transparent flex flex-col">
            <div className="m-auto w-full max-w-[752px] grid grid-cols-1 md:grid-cols-2 gap-6">
 
                <div className="flex flex-col gap-6 text-left">
                    <div className="w-full rounded-2xl border-3 p-6 gap-4 border-white bg-white shadow-md">
                        <div className="w-full gap-1">
                            <p className="font-sans font-medium text-lg text-gray-900 leading-[150%]">Open Live Chat</p>
                            <p className="font-sans font-normal text-sm text-grayscale-600 leading-[150%]">Talk to our customer support.</p>
                        </div>
                        <u className="font-sans font-medium text-sm text-grayscale-500 leading-[150%] cursor-pointer">Send Message</u>
                    </div>
                    <div className="w-full rounded-2xl border-3 p-6 gap-4 border-white bg-white shadow-md">
                        <div className="w-full gap-1">
                            <p className="font-sans font-medium text-lg text-gray-900 leading-[150%]">Read FAQs</p>
                            <p className="font-sans font-normal text-sm text-grayscale-600 leading-[150%]">Browse our general questions.</p>
                        </div>
                        <u className="font-sans font-medium text-sm text-grayscale-500 leading-[150%] cursor-pointer">Find Out More</u>
                    </div>
                </div>

                <div className="flex flex-col rounded-2xl gap-6 p-6 bg-white text-left border border-grayscale-200">
                    <div className="w-full flex flex-col">
                        <label className="font-sans font-normal text-sm leading-[150%] text-grayscale-500">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="font-sans font-normal text-sm leading-[150%] text-grayscale-500">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="font-sans font-normal text-sm leading-[150%] text-grayscale-500">
                            Messages <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                            typeof="text"
                            placeholder="Enter message"
                        />
                    </div>
                    <Button>
                        Send Messages
                    </Button>
                </div>
            </div>
        </div>
    );
}