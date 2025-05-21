import next from "next"
import Support from "./support"
import Form from "./form"

export default function Combination() {
    return (
        <section className="mt-20 w-[752px] h-[531px] gap-[24px] flex flex-row justify-between items-center">
            <Support/>
            <Form/>
        </section>
    )
}