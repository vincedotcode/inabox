'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Star, CheckCircle, ArrowUp } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EditableText } from '@/components/ui/editable-text'
import { EditableImage } from '@/components/ui/editable-image'
import initialContentJSON from '@/content/datav2.json'

type Content = typeof initialContentJSON

type PageProps = {
  initialContent?: Content
  onContentChange?: (content: Content) => void
}

export default function Faceshop({ initialContent = initialContentJSON, onContentChange }: PageProps) {
  const [content, setContent] = useState<Content>(initialContent)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateContent = (path: string, value: any) => {
    setContent(prevContent => {
      const newContent = JSON.parse(JSON.stringify(prevContent))
      let current = newContent
      const keys = path.split('.')
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]]
      }
      current[keys[keys.length - 1]] = value

      if (onContentChange) {
        onContentChange(newContent)
      }

      return newContent
    })
  }

  return (
    <div className={`min-h-screen bg-${content.theme.colors.background}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b bg-${content.header.background} backdrop-blur supports-[backdrop-filter]:bg-${content.header.backdropBackground}`}>
        <div className="container flex h-16 items-center justify-between">
          <EditableImage
            src={content.header.logo}
            alt="Company Logo"
            width={150}
            height={50}
            className="object-contain"
            onUpdate={(value) => updateContent('header.logo', value)}
          />
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <EditableText
              value={content.header.email}
              onUpdate={(value) => updateContent('header.email', value)}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <EditableText
                  value={content.hero.title}
                  onUpdate={(value) => updateContent('hero.title', value)}
                />
                {' '}
                <span className={`text-${content.theme.colors.primary}-600`}>
                  <EditableText
                    value={content.hero.highlight}
                    onUpdate={(value) => updateContent('hero.highlight', value)}
                  />
                </span>
                {' '}
                <EditableText
                  value={content.hero.subtitle}
                  onUpdate={(value) => updateContent('hero.subtitle', value)}
                />
              </h1>
              <p className={`text-${content.theme.colors.text} text-lg`}>
                <EditableText
                  value={content.hero.description}
                  onUpdate={(value) => updateContent('hero.description', value)}
                />
              </p>
              <ul className="space-y-4">
                {content.hero.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className={`h-5 w-5 text-${content.theme.colors.primary}-600`} />
                    <EditableText
                      value={feature}
                      onUpdate={(value) => {
                        const newFeatures = [...content.hero.features]
                        newFeatures[index] = value
                        updateContent('hero.features', newFeatures)
                      }}
                    />
                  </li>
                ))}
              </ul>
              <div className={`bg-${content.hero.discount.background} text-${content.hero.discount.text_color} p-8 rounded-lg`}>
                <h3 className="text-3xl font-bold mb-2">
                  <EditableText
                    value={content.hero.discount.text}
                    onUpdate={(value) => updateContent('hero.discount.text', value)}
                  />
                </h3>
                <p>
                  <EditableText
                    value={content.hero.discount.subtext}
                    onUpdate={(value) => updateContent('hero.discount.subtext', value)}
                  />
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className={`w-full md:w-auto bg-${content.theme.buttons.primary.background} hover:bg-${content.theme.buttons.primary.hover} text-${content.theme.buttons.primary.text}`}
                  >
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Enter Your Details</DialogTitle>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <Button 
                      type="submit" 
                      className={`bg-${content.theme.buttons.primary.background} hover:bg-${content.theme.buttons.primary.hover}`}
                    >
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative w-full h-[600px]">
              <EditableImage
                src={content.hero.image}
                alt="Product Image"
                width={600}
                height={600}
                className="rounded-lg"
                onUpdate={(value) => updateContent('hero.image', value)}
              />
            </div>
          </div>
        </section>

        {/* Apply Form Section */}
        <section className="mb-20">
          <div className="p-8 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="apply-name">Name</Label>
                <Input id="apply-name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apply-email">Email</Label>
                <Input id="apply-email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apply-phone">Phone</Label>
                <Input id="apply-phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apply-message">Message</Label>
                <textarea id="apply-message" placeholder="Enter your message" className="p-2 border rounded-lg"></textarea>
              </div>
              <Button type="submit" className={`bg-${content.theme.buttons.primary.background} hover:bg-${content.theme.buttons.primary.hover}`}>Submit Application</Button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className={`bg-${content.footer.background} text-${content.footer.text} py-8`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {content.footer.links.map((link, index) => (
              <Link 
                key={index} 
                href={link.url} 
                className={`hover:text-${link.hoverColor}`}
              >
                <EditableText
                  value={link.text}
                  onUpdate={(value) => {
                    const newLinks = [...content.footer.links]
                    newLinks[index] = { ...newLinks[index], text: value }
                    updateContent('footer.links', newLinks)
                  }}
                />
              </Link>
            ))}
          </div>
          <p className="text-gray-400">
            <EditableText
              value={content.footer.copyright}
              onUpdate={(value) => updateContent('footer.copyright', value)}
            />
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 bg-${content.backToTop.background} text-${content.backToTop.text} p-3 rounded-full shadow-lg hover:bg-${content.backToTop.hover} transition-colors`}
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
