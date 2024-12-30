import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronDown, Bell, Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Hero } from "@/components/landing/hero"
import { Feature } from "@/components/landing/features"
import { CTA } from "@/components/landing/cta"
import { PricingSection } from "@/components/landing/pricing"
import { Header1 } from "@/components/landing/header"

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
            <footer className="border-t bg-muted">
                <div className="container py-12 px-4">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                                <span className="text-xl font-semibold">Inabox</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Making business expenses management easier and faster.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Integrations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        API Reference
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-primary">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} Inabox. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const benefits = [
    {
        icon: '📄',
        title: 'Automatic Invoice Payment',
        description: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
    },
    {
        icon: '📊',
        title: 'Clear payment history',
        description: 'Clear payment history helps you to track your business expenses on specific dates.',
    },
    {
        icon: '💳',
        title: 'Use of multi-card payments',
        description: 'Have more than one debit or credit card? Don\'t worry, we support payments using more than one card.',
    },
]

const steps = [
    'Register your Inabox account.',
    'Fill in the list of your business expenses.',
    'Done, let\'s continue the work.',
]

const pricingPlans = [
    {
        name: 'Free',
        price: '0',
        description: 'Perfect plan to get started',
        icon: '🎯',
        buttonText: 'Get Your Free Plan',
        popular: false,
        features: [
            { text: 'Sync across device', included: true },
            { text: '5 workspace', included: true },
            { text: 'Collaborate with 5 user', included: true },
            { text: 'Sharing permission', included: false },
            { text: 'Admin tools', included: false },
            { text: '100+ integrations', included: false },
        ],
    },
    {
        name: 'Pro',
        price: '12',
        description: 'Perfect plan for professionals!',
        icon: '⭐️',
        buttonText: 'Get Started',
        popular: true,
        features: [
            { text: 'Everything in Free Plan', included: true },
            { text: 'Unlimited workspace', included: true },
            { text: 'Collaborative workspace', included: true },
            { text: 'Sharing permission', included: true },
            { text: 'Admin tools', included: true },
            { text: '100+ integrations', included: true },
        ],
    },
    {
        name: 'Ultimate',
        price: '33',
        description: 'Best suits for great company!',
        icon: '⚡️',
        buttonText: 'Get Started',
        popular: false,
        features: [
            { text: 'Everything in Pro Plan', included: true },
            { text: 'Daily performance reports', included: true },
            { text: 'Dedicated assistant', included: true },
            { text: 'Artificial intelligence', included: true },
            { text: 'Marketing tools & automations', included: true },
            { text: 'Advanced security', included: true },
        ],
    },
]

