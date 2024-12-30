'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from 'lucide-react'

interface BasicInfoFormProps {
  onNext: (data: { name: string; slug: string; description: string }) => void;
  initialData?: { name: string; slug: string; description: string };
}

export default function BasicInfoForm({ onNext, initialData }: BasicInfoFormProps) {
  const [name, setName] = useState(initialData?.name || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [description, setDescription] = useState(initialData?.description || '')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setSlug(initialData.slug)
      setDescription(initialData.description)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext({ name, slug, description })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Business Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Label htmlFor="slug">Slug</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-4 h-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>A slug is a URL-friendly version of your business name. It's used in web addresses and should be lowercase, without spaces or special characters.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Input
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit">Next</Button>
    </form>
  )
}

