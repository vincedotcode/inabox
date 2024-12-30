'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AddressFormProps {
  onNext: (data: { addressLine1: string; addressLine2: string; city: string; state: string; postalCode: string; country: string }) => void;
  onPrevious: () => void;
  initialData?: { addressLine1: string; addressLine2: string; city: string; state: string; postalCode: string; country: string };
}

export default function AddressForm({ onNext, onPrevious, initialData }: AddressFormProps) {
  const [addressLine1, setAddressLine1] = useState(initialData?.addressLine1 || '')
  const [addressLine2, setAddressLine2] = useState(initialData?.addressLine2 || '')
  const [city, setCity] = useState(initialData?.city || '')
  const [state, setState] = useState(initialData?.state || '')
  const [postalCode, setPostalCode] = useState(initialData?.postalCode || '')
  const [country, setCountry] = useState(initialData?.country || '')

  useEffect(() => {
    if (initialData) {
      setAddressLine1(initialData.addressLine1)
      setAddressLine2(initialData.addressLine2)
      setCity(initialData.city)
      setState(initialData.state)
      setPostalCode(initialData.postalCode)
      setCountry(initialData.country)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ addressLine1, addressLine2, city, state, postalCode, country })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="addressLine1">Address Line 1</Label>
        <Input
          id="addressLine1"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="addressLine2">Address Line 2</Label>
        <Input
          id="addressLine2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}

