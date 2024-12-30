import { Check, Building2, Phone, MapPin, Briefcase } from 'lucide-react'
import React from 'react'

interface StepperProps {
  steps: string[]
  currentStep: number
}

export function Stepper({ steps, currentStep }: StepperProps) {
  const icons = [Building2, Phone, MapPin, Briefcase]

  return (
    <div className="flex items-center justify-center w-full">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              index <= currentStep ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'
            }`}
          >
            {index < currentStep ? (
              <Check className="w-6 h-6" />
            ) : (
              icons[index] && React.createElement(icons[index], { className: "w-5 h-5" })
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-full h-1 ${
                index < currentStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

