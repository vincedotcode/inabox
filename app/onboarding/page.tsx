import BusinessOnboardingCard from '@/components/onboarding/business-onboarding-card'
import { Package } from 'lucide-react'

export default function OnboardingPage() {
  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center mb-8">
        <Package className="w-10 h-10 text-primary mr-2" />
        <h1 className="text-3xl font-bold text-primary">inabox</h1>
      </div>
      <BusinessOnboardingCard />
    </div>
  )
}

