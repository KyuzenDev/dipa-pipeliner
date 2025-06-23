"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Image from "next/image";
import Pesan from "../../../../../public/formulir/massages.svg";
import Asked from "../../../../../public/formulir/Asked.svg";
import EmailSender from "../../../../../public/formulir/Mailogo.svg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function FormContact() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = (data: z.infer<typeof contactSchema>) => {
        console.log("Submitted:", data);
    };

    return (
        <div className="w-full px-6 md:px-16 pb-16 md:pb-28 pt-10 md:pt-16 flex flex-col gap-16 bg-transparent">
            <div className="max-w-[752px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="flex flex-col gap-6 text-left">
                    <div className="w-full flex flex-col rounded-2xl border-3 p-6 gap-4 border-white bg-white shadow-md">
                        <Image src={Pesan} alt="massage-fitures" className="w-10 h-10" />
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-lg text-gray-900">Open Live Chat</p>
                            <p className="text-sm text-grayscale-600">Talk to our customer support.</p>
                        </div>
                        <u className="text-sm text-grayscale-500 cursor-pointer">Send Message</u>
                    </div>
                    <div className="w-full flex flex-col rounded-2xl border-3 p-6 gap-4 border-white bg-white shadow-md">
                        <Image src={Asked} alt="asked-fre-media" className="w-10 h-10" />
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-lg text-gray-900">Read FAQs</p>
                            <p className="text-sm text-grayscale-600">Browse our general questions.</p>
                        </div>
                        <u className="text-sm text-grayscale-500 cursor-pointer">Find Out More</u>
                    </div>
                </div>

                <div className="flex flex-col rounded-2xl gap-6 p-6 bg-white text-left border border-grayscale-200">
                    <Image src={EmailSender} alt="send-your-feedback" />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name<span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address<span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Messages<span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Enter message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Send Messages</Button>
                        </form>
                    </Form>
                </div>

            </div>
        </div>
    );
}