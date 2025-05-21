import Combination from "./combine";
import Conder from "./contactheader";

export default function Bodies() {
    return (
        <section className="flex flex-col justify-center items-center max-w-full w-full h-[919px] border-b px-[4rem] pt-[4rem] pb-[112px] gap-[4rem] bg-linear-to-r from-green-300 via-yellow-300 to-blue-300">
            <Conder title="Support Center" description="Reach out to us if you had common problems and questions."/>
            <Combination />
        </section>
    )
}