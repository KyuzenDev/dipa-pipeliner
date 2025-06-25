import { FAQSosialMedia } from "@/data/faq"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContentBlogDetail() {
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col gap-8 w-full max-w-[720px]">
                <p className="font-sans text-large font-normal text-gray-500 leading-8 text-left">
                    In 2025, <u className="text-gray-900">Customer Relationship Management (CRM)</u> is poised for some thrilling
                    changes. With the rapid rise of generative AI, shifting business dynamics, and an
                    increasing focus on post-sales support, CRM is evolving to be faster and flexible.
                </p>
                <div className="flex flex-col w-full h-[132px] gap-4">
                    <h4 className="w-full h-[30px] text-left font-sans font-semibold text-2xl leading-[120%]">
                        The Game Changer For CRM
                    </h4>
                    <p className="w-full h-[87px] text-gray-600 text-left font-sans font-normal text-large leading-[160%]">
                        By 2025, AI-powered CRMs won&apos;t just store data they&apos;ll write follow-ups, summarize
                        meetings, track interactions, and predict customer needs. What was once a bonus
                        will soon be essential. These AI-driven features will shift from nice-to-have.
                    </p>
                </div>
                <p className="font-sans font-normal text-left text-large leading-[160%] text-gray-600">
                    Think about it automated meeting summaries, email drafting, and activity tracking
                    will soon be the new standard. This means sales teams can say goodbye to hours
                    spent on repetitive tasks like data entry and instead focus on selling.
                </p>
                <div className="flex flex-col w-full h-[231px] gap-4">
                    <h4 className="font-sans font-semibold text-left text-2xl text-gray-900 leading-[120%]">
                        A New Focus For CRM
                    </h4>
                    <p className="font-sans font-normal text-left text-large leading-[160%] text-gray-900">
                        By 2025, the biggest shift in CRM is the growing focus on the post-sales memory,
                        CRMs are no longer just for closing deals—they&apos;re evolving to support the entire
                        customer journey, from first touch to long-term retention.
                        <br />
                        • Pipeliner are evolving beyond just sales tools <br />
                        • The post-sales experience is becoming a priority <br />
                        • Pipeliner will manage the full customer journey
                    </p>
                </div>
                <p className="font-sans font-normal text-left text-large leading-[160%] text-gray-600">
                    The future of CRM isnt just about tracking interactions; its about enhancing those
                    interactions through smart, user-friendly, and secure solutions that benefit both
                    businesses and customers.
                </p>
                <div className="flex flex-col w-full h-[231px] gap-4">
                    <h4 className="font-sans font-semibold text-left text-2xl text-gray-900 leading-[120%]">
                        Smaller Vendors On The Rise
                    </h4>
                    <p className="font-sans font-normal text-left text-large leading-[160%] text-gray-900">
                        AI isn&apos;t the only force transforming CRM smaller vendors are gaining ground, offering
                        flexible, user-friendly solutions that rival legacy systems. Once focused on SMBs,
                        these new players are now <u className="text-grayscale-900 font-sans text-large leading-[160%]">ready to meet enterprise</u> demands with integration.
                    </p>
                </div>
                <div className="flex gap-2">
                {FAQSosialMedia.map(({ platform, url }) => (
                  <Link href={url} key={platform} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="icon"
                      className="w-6 h-6 p-1 relative flex cursor-pointer justify-center items-center rounded bg-grayscale-200 hover:bg-gray-300"
                    >
                      <Image
                        src={`/socialMedia/${platform}.svg`}
                        alt={platform}
                        width={14}
                        height={14}
                        className="absolute z-1"
                      />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
        </div>
    )
}
