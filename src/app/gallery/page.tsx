"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { X, Menu } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/hero-image.jpg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 2, src: "/images/sdfg.jpeg", alt: "Commercial Office Building", category: "Commercial", description: "State-of-the-art office complex in downtown" },
  { id: 3, src: "/images/Kk.jpg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 4, src: "/images/Kk.jpg", alt: "Home Renovation", category: "Renovation", description: "Complete home transformation project" },
  { id: 5, src: "/images/ss.jpg", alt: "Sustainable Building", category: "Sustainable", description: "Eco-friendly construction with solar integration" },
  { id: 6, src: "/images/modern_home_design (2).jpg", alt: "Luxury Apartment", category: "Residential", description: "High-end apartment complex with modern amenities" },
  { id: 7, src: "/images/edi16.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 8, src: "/images/edi15.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 9, src: "/images/edi14.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 10, src: "/images/edi12.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 11, src: "/images/edi8.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 12, src: "/images/edi7.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 13, src: "/images/edi5.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 14, src: "/images/edi4.jpeg", alt: "Modern House Project", category: "Residential", description: "Contemporary luxury home with sustainable features" },
  { id: 15, src: "/images/.jpg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 16, src: "/images/edi1.jpeg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 17, src: "/images/edi2.jpeg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 18, src: "/images/edi3.jpeg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 19, src: "/images/edi9.jpeg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
  { id: 20, src: "/images/edi13.jpeg", alt: "Modern Interior Design", category: "Interior", description: "Minimalist interior design for urban living" },
];

const categories = ["All", "Residential", "Commercial", "Interior", "Renovation", "Sustainable"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredImages = galleryImages.filter(image => 
    selectedCategory === "All" || image.category === selectedCategory
  );

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-white bg-opacity-100 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative w-[250px] h-[60px]">
              <Image 
                src="/images/chirammel_construction.png"
                alt="Chirammel Construction Logo"
                width={350}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/"
                className="text-blue-700 hover:text-yellow-500 font-xl transition duration-300"
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300"
              >
                About Us
              </Link>
              <Link 
                href="/gallery"
                className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300"
              >
                Gallery
              </Link>
              <Link 
                href="/services"
                className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300"
              >
                Services
              </Link>
              <Link 
                href="/contact"
                className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-yellow-500 focus:outline-none"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75">
            <div className="fixed top-0 right-0 w-full max-w-[16rem] h-full bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
               
                <button
                  type="button"
                  className="text-gray-500 hover:text-yellow-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link 
                  href="/" 
                  className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about" 
                  className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/gallery" 
                  className="block py-2 block py-2text-blue-700 hover:text-yellow-500 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  href="/services" 
                  className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-2 text-blue-700 hover:text-yellow-500 font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-16 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Project Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of completed projects, showcasing our commitment to excellence in construction and design.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category ? 'bg-yellow-500 text-white' : 'bg-white text-gray-700 hover:bg-yellow-100'} shadow-sm`}>
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(image => (
            <div key={image.id} className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer" onClick={() => setSelectedImage(image)}>
              <div className="relative h-64 w-full">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{image.alt}</h3>
                <p className="text-gray-600">{image.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
              <div className="relative h-[70vh]">
                <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <span className="inline-block px-4 py-2 bg-yellow-500 text-white rounded-full">{selectedImage.category}</span>
              </div>
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setSelectedImage(null)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}