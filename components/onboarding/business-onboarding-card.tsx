'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Stepper } from '@/components/onboarding/stepper'
import BasicInfoForm from '@/components/onboarding/basic-info-form'
import ContactInfoForm from '@/components/onboarding/contact-info-form'
import AddressForm from '@/components/onboarding/address-form'
import AdditionalInfoForm from '@/components/onboarding/additional-form'
import Loader from '@/components/loader'
import axios from 'axios' // Import Axios
import { useUser } from '@clerk/nextjs' // Assuming Clerk for user management
import { toast } from 'sonner' // Assuming you're using sonner for notifications

const steps = ['Basic Info', 'Contact', 'Address', 'Additional Info']

interface BusinessData {
  basicInfo?: {
    name: string;
    slug: string;
    description: string;
  };
  contactInfo?: {
    email: string;
    phone: string;
    website?: string; // Make website optional
  };
  address?: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  additionalInfo?: {
    logo: string; // This will now be a base64 string
    industry: string;
  };
}

export default function BusinessOnboardingCard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [businessData, setBusinessData] = useState<BusinessData>({})
  const [loading, setLoading] = useState(false)
  const { user } = useUser() // Get user details

  const handleNext = (data: Partial<BusinessData>) => {
    setBusinessData((prevData) => ({ ...prevData, ...data }))
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async () => {
    setLoading(true) // Show loader
    try {
      if (!user?.id) {
        throw new Error('User not authenticated')
      }

      const businessPayload = {
        userId: user.id,
        name: businessData.basicInfo?.name || '',
        slug: businessData.basicInfo?.slug || '',
        description: businessData.basicInfo?.description || '',
        email: businessData.contactInfo?.email || '',
        phone: businessData.contactInfo?.phone || '',
        website: businessData.contactInfo?.website || '',
        addressLine1: businessData.address?.addressLine1 || '',
        addressLine2: businessData.address?.addressLine2 || '',
        city: businessData.address?.city || '',
        state: businessData.address?.state || '',
        postalCode: businessData.address?.postalCode || '',
        country: businessData.address?.country || '',
        logo: businessData.additionalInfo?.logo || '',
        industry: businessData.additionalInfo?.industry || '',
      }

      // API call to create business
      const response = await axios.post('/api/business', businessPayload)

      if (response.status === 201) {
        toast.success('Business onboarding completed!')
      } else {
        throw new Error('Unexpected response from server')
      }
    } catch (error: any) {
      console.error('Error creating business:', error)
      toast.error(error.response?.data?.error || 'Failed to create business. Please try again.')
    } finally {
      setLoading(false) // Hide loader
    }
  }

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Business Onboarding</CardTitle>
        <CardDescription>Complete the following steps to set up your business profile</CardDescription>
      </CardHeader>
      <CardContent>
        {loading && <Loader />} {/* Show loader when loading */}
        {!loading && (
          <>
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="mt-8">
              {currentStep === 0 && (
                <BasicInfoForm 
                  onNext={(data) => handleNext({ basicInfo: data })} 
                  initialData={businessData.basicInfo}
                />
              )}
              {currentStep === 1 && (
                <ContactInfoForm 
                  onNext={(data) => handleNext({ contactInfo: data })} 
                  onPrevious={handlePrevious}
                  initialData={businessData.contactInfo}
                />
              )}
              {currentStep === 2 && (
                <AddressForm 
                  onNext={(data) => handleNext({ address: data })} 
                  onPrevious={handlePrevious}
                  initialData={businessData.address}
                />
              )}
              {currentStep === 3 && (
                <AdditionalInfoForm 
                  onSubmit={(data) => {
                    setBusinessData((prevData) => ({ ...prevData, additionalInfo: data }))
                    handleSubmit()
                  }} 
                  onPrevious={handlePrevious}
                  initialData={businessData.additionalInfo}
                />
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
