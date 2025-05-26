import Link from "next/link";

export default function Custom404() {
    return (
        <section className="max-w-full w-full h-[730px] border-b py-[269px] px-16 gap-16 flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-blue-200">
            <div className="w-[1072px] h-[192px] gap-10 flex flex-col justify-center items-center">
                <div className="w-full h-[112px] gap-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-semibold text-gray-950">Oh no...</h1>
                    <p className="text-lg text-gray-600">
                        The page you are looking for doesn&apos;t exist.
                    </p>
                </div>

                {/* Tombol manual untuk kembali ke home */}
                <Link href="/">
                    Return to Home
                </Link>
            </div>
        </section>
    );
}
