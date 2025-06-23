import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function FeaturesCRM() {
    return (
        <div className="flex flex-col items-center gap-20 py-12 px-18">
            <div className="text-center flex flex-col items-center gap-5">
                <Badge>
                    <Avatar>
                        <AvatarImage src="/avatar/jerrell.svg" sizes="sm" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    Jerrell Luna
                    {" "}
                    <p className="text-grayscale-600"> - Chief Operating Officer</p>
                </Badge>
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl font-semibold leading-[120%]">“When I Tried Pipeliner<br /> I Think is the Future of CRM”</h1>
                    <p className="font-normal text-grayscale-700">
                        Experience the next generation of customer relationship management.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-6 justify-center text-center">

                <div className="overflow-hidden shadow-sm flex flex-col items-center justify-center max-w-[341px] w-full rounded-2xl border border-[#E0F1FB]">
                    <div className="rounded-2xl flex flex-col gap-4 bg-white py-6 px-4">
                        <h3 className="font-semibold text-xl text-grayscale-900">Data Powered <br /> Workflows Design</h3>
                        <p className="text-grayscale-600 text-md">Automate your go market decisions <br /> based on the most reliable dataset.</p>
                    </div>
                    <Image src="/features/features_1/card_1.svg" alt="Workflow Design" width={341} height={264} />
                </div>

                <div className="overflow-hidden shadow-sm flex flex-col items-center justify-center max-w-[341px] w-full rounded-2xl border border-[#E0F1FB]">
                    <div className="rounded-2xl flex flex-col gap-4 bg-white py-6 px-4">
                        <h3 className="font-semibold text-xl text-grayscale-900">Your Team <br /> Synergy Station</h3>
                        <p className="text-grayscale-600 text-md">Pipeliner boosts go market teams <br /> productivity and streamlines tasks.</p>
                    </div>
                    <Image src="/features/features_1/card_2.svg" alt="Workflow Design" width={341} height={264} />
                </div>

                <div className="overflow-hidden shadow-sm flex flex-col items-center justify-center max-w-[341px] w-full rounded-2xl border border-[#E0F1FB]">
                    <div className="rounded-2xl flex flex-col gap-4 bg-white py-6 px-4">
                        <h3 className="font-semibold text-xl text-grayscale-900">Automate with <br /> Intelligent Control</h3>
                        <p className="text-grayscale-600 text-md">Effortlessly automate intricate <br /> business processes with our smart.</p>
                    </div>
                    <Image src="/features/features_1/card_3.svg" alt="Workflow Design" width={341} height={264} />
                </div>

            </div>


        </div>
    );
}