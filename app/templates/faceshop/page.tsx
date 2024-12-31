'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Star, CheckCircle, ArrowUp } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import content from '@/content/datav2.json'

export default function Page() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowBackToTop(window.scrollY > 300)
    })
  }

  return (
    <div className={`min-h-screen bg-${content.theme.colors.background}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b bg-${content.header.background} backdrop-blur supports-[backdrop-filter]:bg-${content.header.backdropBackground}`}>
        <div className="container flex h-16 items-center justify-between">
          <Image
            src={content.header.logo}
            alt="Company Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>{content.header.email}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {content.hero.title}{' '}
                <span className={`text-${content.theme.colors.primary}-600`}>{content.hero.highlight}</span>{' '}
                {content.hero.subtitle}
              </h1>
              <p className={`text-${content.theme.colors.text} text-lg`}>{content.hero.description}</p>
              <ul className="space-y-4">
                {content.hero.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className={`h-5 w-5 text-${content.theme.colors.primary}-600`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={`bg-${content.hero.discount.background} text-${content.hero.discount.text_color} p-8 rounded-lg`}>
                <h3 className="text-3xl font-bold mb-2">{content.hero.discount.text}</h3>
                <p>{content.hero.discount.subtext}</p>
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
            <div className="relative aspect-square">
              <Image
                src={content.hero.image}
                alt="Product Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{content.testimonials.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`p-6 rounded-lg border-2 border-${testimonial.borderColor}`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <p className={`text-${content.theme.colors.text}`}>{testimonial.quote}</p>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src={content.reviews.image}
                alt="Product Display"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              {content.reviews.items.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                  <p className={`text-${content.theme.colors.text} mb-4`}>{review.review}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className={`h-5 w-5 fill-${review.starColor} text-${review.starColor}`} />
                        ))}
                      </div>
                      <span className="font-medium">{review.author}</span>
                    </div>
                    {review.verified && (
                      <div className={`flex items-center gap-1 text-${review.verifiedColor}`}>
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm">Verified Buyer</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{content.faq.title}</h2>
            <p className={`text-${content.theme.colors.text}`}>{content.faq.subtitle}</p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {content.faq.questions.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                {link.text}
              </Link>
            ))}
          </div>
          <p className="text-gray-400">{content.footer.copyright}</p>
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

