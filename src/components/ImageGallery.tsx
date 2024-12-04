'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Image {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: Image[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const openModal = (index: number) => setCurrentImageIndex(index)
  const closeModal = () => setCurrentImageIndex(null)
  const nextImage = () => setCurrentImageIndex(prev => 
    prev !== null ? (prev + 1) % images.length : null
  )
  const prevImage = () => setCurrentImageIndex(prev => 
    prev !== null ? (prev - 1 + images.length) % images.length : null
  )

  return (
    <div>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-video cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh] px-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[70vh] object-contain"
            />
            {images[currentImageIndex].caption && (
              <p className="text-white text-center mt-4">
                {images[currentImageIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}