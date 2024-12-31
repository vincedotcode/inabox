'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Faceshop from "@/app/templates/faceshop/page"

export default function Page() {
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

  const handleContentChange = (updatedContent: any) => {
    console.log("Updated content received from Faceshop:", updatedContent)
    // Add logic to save or process the emitted data.
  }

  const handleConfirm = () => {
    console.log("Confirm button clicked")
    // Add logic to create the sales funnel
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl">
          <CardHeader className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Edit Your Sales Funnel</h1>
            <p className="text-gray-600 mt-2">Customize your funnel to perfection</p>
          </CardHeader>
          <CardContent className="p-3">
            <div className="laptop-frame bg-gray-800 p-4 rounded-t-2xl shadow-inner">
              <div className="laptop-screen bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-[60vh] overflow-auto custom-scrollbar p-4">
                  <Faceshop onContentChange={handleContentChange} />
                </div>
              </div>
            </div>
            <div className="laptop-base bg-gray-700 h-4 rounded-b-xl mx-auto w-[95%]"></div>
            <div className="laptop-bottom bg-gray-800 h-1 rounded-full mx-auto w-[40%] mt-1"></div>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button 
              onClick={handleConfirm}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-200 hover:scale-105"
            >
              Create Sales Funnel
            </Button>
          </CardFooter>
        </Card>
      </main>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
