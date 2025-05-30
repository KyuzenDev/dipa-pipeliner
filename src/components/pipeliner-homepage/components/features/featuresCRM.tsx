import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function FeaturesCRM() {
    return (
        <div className="flex flex-col items-center gap-20 py-25">
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
            <div></div>
        </div>
    );
}