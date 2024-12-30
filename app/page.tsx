import Link from "next/link"
import { Hero } from "@/components/landing/hero"
import { Feature } from "@/components/landing/features"
import { CTA } from "@/components/landing/cta"
import { PricingSection } from "@/components/landing/pricing"
import { Header1 } from "@/components/landing/header"
import {Footer} from "@/components/landing/footer"
const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

const TIERS = [
    {
        id: "individuals",
        name: "Individuals",
        price: {
            monthly: "Free",
            yearly: "Free",
        },
        description: "For your hobby projects",
        features: [
            "Free email alerts",
            "3-minute checks",
            "Automatic data enrichment",
            "10 monitors",
            "Up to 3 seats",
        ],
        cta: "Get started",
    },
    {
        id: "teams",
        name: "Teams",
        price: {
            monthly: 90,
            yearly: 75,
        },
        description: "Great for small businesses",
        features: [
            "Unlimited phone calls",
            "30 second checks",
            "Single-user account",
            "20 monitors",
            "Up to 6 seats",
        ],
        cta: "Get started",
        popular: true,
    },
    {
        id: "organizations",
        name: "Organizations",
        price: {
            monthly: 120,
            yearly: 100,
        },
        description: "Great for large businesses",
        features: [
            "Unlimited phone calls",
            "15 second checks",
            "Single-user account",
            "50 monitors",
            "Up to 10 seats",
        ],
        cta: "Get started",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: {
            monthly: "Custom",
            yearly: "Custom",
        },
        description: "For multiple teams",
        features: [
            "Everything in Organizations",
            "Up to 5 team members",
            "100 monitors",
            "15 status pages",
            "200+ integrations",
        ],
        cta: "Contact Us",
        highlighted: true,
    },
]



export default function Home() {
    return (
        <div className="flex flex-col bg-background">
            {/* Header */}
            <div className="block">
                <Header1 />
            </div>

            <Hero />

            {/* How It Works */}

            <Feature />


            {/* Pricing */}

            <div className="container relative min-h-screen">
                <div className="absolute inset-0 -z-10">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
                </div>

                <PricingSection
                    title="Simple Pricing"
                    subtitle="Choose the best plan for your needs"
                    frequencies={PAYMENT_FREQUENCIES}
                    tiers={TIERS}
                />
            </div>

            <CTA />
            {/* Footer */}

            <Footer />
         
        </div>
    )
}


