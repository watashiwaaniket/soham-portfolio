import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "08/2024 - Current",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-normal mb-8 pr-4">
            <b>Business Development Executive</b>, Aquarius Ventures - Pune
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6 ">
                - Identified new business opportunities in the Real Estate Sector
                and initiated strategic partnerships with key developers in the
                Pune region.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Established strategic alliances with tech start-ups for joint
                ventures in emerging markets.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Reached out to 100+ corporate clients to introduce a new Festive
                Sale Opportunity, with the purpose of their participation.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Developed a partnership proposal for collaboration with real
                estate developers, increasing the company's visibility in Pune's
                property market.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Negotiated and closed deals with leading Real Estate Developers
                to expand Company reach and profitable relationships.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6" >
                - Closed high-value contracts originated from the Lead Generation
                by Campaigning in Major Cities in Maharashtra and countries like
                GCC, Australia, USA, UK, etc.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Designed customized sales pitches for new clients, increasing
                lead conversion by 20%.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Negotiated pricing and guided the clients with latest market trends
                and prices, resulting in increased Brand trust and conversions.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Expanded sales pipeline by onboarding 50 new clients through
                cold outreach and networking events.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Collaborated with product development teams to improve
                offerings based on customer feedback.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
                - Managed post-sales client relationships, securing a 10% increase
                in repeat business within six months.
            </div>

          </div>
        </div>
      ),
    },
    {
      title: "05/2023 - 08/2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-normal mb-8 pr-4">
            <b>Digiholic Marketing Agency</b>
          </p>
        <div className="fflex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Managed Social Media Marketing, SEO, Website Optimization, and Graphic Design.
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Handled key accounts: 'Podar Jumbo Kids, Tamil Nadu' and 'Happy Sparrow Pre-School.'
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Created and secured approval for social media creatives; collaborated with Graphic Designer.
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Strategically posted content on various social media platforms.
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Optimized the website for 'SitaVatika Spices.'
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Executed comprehensive Off-Page and On-Page SEO for 'Al Masam Stationery.'
        </div>
        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm sm:text-xl p-2 pr-6">
            - Demonstrated adaptability and expertise in delivering results across various digital marketing domains.
        </div>

        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
