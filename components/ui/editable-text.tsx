import React, { useState, useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"

interface EditableTextProps {
  value: string
  onUpdate: (value: string) => void
}

export const EditableText: React.FC<EditableTextProps> = ({ value, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(value)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
    onUpdate(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditing(false)
      onUpdate(text)
    }
  }

  if (isEditing) {
    return (
      <Input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full"
      />
    )
  }

  return <span onDoubleClick={handleDoubleClick}>{text}</span>
}

