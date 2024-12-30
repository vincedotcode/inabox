'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ContactInfoFormProps {
  onNext: (data: { email: string; phone: string; website?: string }) => void;
  onPrevious: () => void;
  initialData?: { email: string; phone: string; website?: string };
}

export default function ContactInfoForm({ onNext, onPrevious, initialData }: ContactInfoFormProps) {
  const [email, setEmail] = useState(initialData?.email || '')
  const [phone, setPhone] = useState(initialData?.phone || '')
  const [website, setWebsite] = useState(initialData?.website || '')

  useEffect(() => {
    if (initialData) {
      setEmail(initialData.email || '')
      setPhone(initialData.phone || '')
      setWebsite(initialData.website || '')
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ email, phone, ...(website && { website }) })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>Previous</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}

