'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Scale, Leaf, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { content } from '@/content/data'

const icons = {
  Heart,
  Scale,
  Leaf
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    quantity: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 px-6 flex justify-between items-center border-b sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Image
            src={content.header.logo}
            alt={content.header.companyName}
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <h1 className="font-semibold">{content.header.companyName}</h1>
            <p className="text-sm text-gray-600">{content.header.tagline}</p>
          </div>
        </div>
        <a href={`mailto:${content.header.email}`} className="text-gray-600 hover:text-gray-900 transition-colors">
          {content.header.email}
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center">
        <Image
          src={content.hero.backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-green-800 mb-2">
                {content.hero.title}
              </h1>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                {content.hero.subtitle}
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                {content.hero.description}
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-green-800 hover:bg-green-900">
                    {content.hero.ctaText}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{content.leadForm.title}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {content.leadForm.fields.map((field) => (
                      <div key={field.name} className="space-y-2">
                        <Label htmlFor={field.name}>{field.label}</Label>
                        <Input
                          id={field.name}
                          type={field.type}
                          required={field.required}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            [field.name]: e.target.value
                          }))}
                        />
                      </div>
                    ))}
                    <Button type="submit" className="w-full">Submit</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <Image
                src={content.hero.productImage}
                alt="Green Tea Product"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <Image
          src={content.benefits.backgroundImage}
          alt="Benefits Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.benefits.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {content.benefits.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.items.map((benefit, index) => {
              const Icon = icons[benefit.icon as keyof typeof icons]
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">{content.about.title}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src={content.about.mainImage}
                alt="Tea Plantation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-8">{content.about.description}</p>
              {content.about.features.map((feature, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
              <blockquote className="text-xl italic text-gray-700 mt-8 border-l-4 border-green-600 pl-4">
                {content.about.quote}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <Image
          src={content.faq.backgroundImage}
          alt="FAQ Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.faq.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {content.faq.description}
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {content.faq.questions.map((faq, index) => (
              <Card key={index} className="mb-4">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <Image
          src={content.testimonials.backgroundImage}
          alt="Testimonials Background"
          fill
          className="object-cover opacity-10"
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{content.testimonials.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {content.testimonials.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <Card
                key={index}
                className={`${testimonial.color} group hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 italic relative">
                    <span className="text-4xl text-green-800 absolute -top-2 -left-2">"</span>
                    {testimonial.text}
                    <span className="text-4xl text-green-800 absolute -bottom-6 -right-2">"</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">&copy; {content.footer.currentYear} {content.footer.companyName}. All rights reserved.</p>
          <p className="text-sm text-green-200">Powered by inabox</p>
        </div>
      </footer>
    </div>
  )
}

