import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface EditableImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  onUpdate: (value: string) => void
}

export const EditableImage: React.FC<EditableImageProps> = ({ src, alt, width, height, className, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [previewSrc, setPreviewSrc] = useState(src)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setPreviewSrc(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    onUpdate(previewSrc)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setPreviewSrc(src)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg">
        <Image 
          src={previewSrc} 
          alt={alt || "Preview"} 
          width={width}
          height={height}
          className={`object-cover mb-4 rounded-lg ${className}`}
        />
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />
        <div className="flex gap-2">
          <Button onClick={handleSave}>Save</Button>
          <Button variant="outline" onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    )
  }

  return (
    <div onDoubleClick={handleDoubleClick} className="relative">
      <Image 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        className={`object-cover ${className}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white">
        Double-click to edit
      </div>
    </div>
  )
}

