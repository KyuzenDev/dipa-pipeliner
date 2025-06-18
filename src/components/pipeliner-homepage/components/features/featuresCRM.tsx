import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center">

                <div className="rounded-2xl p-6 flex flex-col gap-4 bg-[linear-gradient(to_bottom,white_50%,#B7E2FA_80%)] shadow-sm border border-[#E0F1FB]">
                    <h3 className="font-semibold text-4xl text-grayscale-900">Data Powered <br/> Workflows Design</h3>
                    <p className="text-grayscale-600 text-xl">Automate your go market decisions <br /> based on the most reliable dataset.</p>
                </div>

                <div className="rounded-2xl p-6 flex flex-col gap-4 bg-[linear-gradient(to_bottom,white_50%,#C7CCFA_80%)] shadow-sm border border-[#D1F2E4]">
                    <h3 className="font-semibold text-4xl text-grayscale-900">Your Team <br /> Synergy Station</h3>
                    <p className="text-grayscale-600 text-xl">Pipeliner boosts go market teams productivity and streamlines tasks.</p>
                </div>

                <div className="rounded-2xl p-6 flex flex-col gap-4 bg-[linear-gradient(to_bottom,white_50%,#C8FBEE_80%)] shadow-sm border border-[#FBDDC6]">
                    <h3 className="font-semibold text-4xl text-grayscale-900">Automate with br
                        Intelligent Control</h3>
                    <p className="text-grayscale-600 text-xl">Effortlessly automate intricate business processes with our smart.</p>
                </div>
            </div>

        </div>
    );
}