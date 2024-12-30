'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Upload, X } from 'lucide-react'

interface AdditionalInfoFormProps {
  onSubmit: (data: { logo: string; industry: string }) => void;
  onPrevious: () => void;
  initialData?: { logo: string; industry: string };
}

const industries = [
  'Agriculture',
  'Automotive',
  'Banking',
  'Construction',
  'Education',
  'Energy',
  'Entertainment',
  'Fashion',
  'Finance',
  'Food and Beverage',
  'Healthcare',
  'Hospitality',
  'Information Technology',
  'Manufacturing',
  'Media',
  'Real Estate',
  'Retail',
  'Telecommunications',
  'Transportation',
  'Travel and Tourism',
]

export default function AdditionalInfoForm({ onSubmit, onPrevious, initialData }: AdditionalInfoFormProps) {
  const [logo, setLogo] = useState<string>(initialData?.logo || '')
  const [industry, setIndustry] = useState(initialData?.industry || '')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (initialData) {
      setLogo(initialData.logo)
      setIndustry(initialData.industry)
    }
  }, [initialData])

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setLogo(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveLogo = () => {
    setLogo('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ logo, industry })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="logo">Logo</Label>
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Logo
          </Button>
          <Input
            id="logo"
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleLogoUpload}
          />
          {logo && (
            <>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={logo} alt="Logo preview" className="w-full h-full object-cover" />
              </div>
              <Button type="button" variant="ghost" onClick={handleRemoveLogo} className="p-1">
                <X className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select value={industry} onValueChange={setIndustry}>
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((ind) => (
              <SelectItem key={ind} value={ind}>
                {ind}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onPrevious}>Previous</Button>
        <Button type="submit">Complete</Button>
      </div>
    </form>
  )
}

