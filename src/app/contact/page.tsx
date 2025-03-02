"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { X, Menu } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Add mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Add form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    isError: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set loading state
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });
    
    try {
      // Send data to your email endpoint
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Handle the response
      const result = await response.json();
      
      if (response.ok) {
        // Success - clear form and show success message
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus({
          message: 'Your message has been sent successfully! We will get back to you soon.',
          isError: false
        });
      } else {
        // Server returned an error
        setSubmitStatus({
          message: result.message || 'Failed to send your message. Please try again.',
          isError: true
        });
      }
    } catch (error) {
      // Network or other error occurred
      setSubmitStatus({
        message: 'An error occurred. Please check your connection and try again.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Link href="/" className="text-blue-700 hover:text-yellow-500 font-xl transition duration-300">
                Home
              </Link>
              <Link href="/about" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                About Us
              </Link>
              <Link href="/gallery" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                Gallery
              </Link>
              <Link href="/services" className="text-blue-700 hover:text-yellow-500 font-medium transition duration-300">
                Services
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
            <div className="fixed top-0 right-0 w-full max-w-xs h-full bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="relative w-[200px] h-[50px]">
                  <Image 
                    src="/images/chirammel_construction.png"
                    alt="Logo"
                    width={350}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <button
                  type="button"
                  className="text-gray-500 hover:text-yellow-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link href="/" className="text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/gallery" className="text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Gallery
                </Link>
                <Link href="/services" className="text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/contact" className="text-blue-700 hover:text-yellow-500 font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[40vh] mb-16">
          <div className="absolute inset-0">
            <Image 
              src="/images/we.jpg" 
              alt="Construction site" 
              fill 
              className="object-cover"
              priority 
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
              <p className="text-xl text-white">We're here to turn your construction dreams into reality</p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-10">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                content: "+91 9895466438",
                detail: "Monday to Saturday, 9am to 8pm"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                content: "info@chirammel.com",
                detail: "We'll respond within 24 hours"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                content: "Nelmanikkara Po",
                detail: "Thrissur, Kerala 680551"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-800 font-medium mb-2">{item.content}</p>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus.message && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-md font-semibold transition duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                      : 'bg-yellow-500 text-black hover:bg-yellow-400'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?q=Thalore&key=AIzaSyDoWaSOzA-yXtcTaVUplSm8vowHHCf4ycM&"
                ></iframe>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <p className="text-gray-700">Chirammel constructions, Thalore, Thrissur, 680306</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of projects do you handle?",
                answer: "We handle a wide range of construction projects including commercial, residential, renovation, and sustainable building projects."
              },
              {
                question: "How do I get a quote for my project?",
                answer: "You can get a quote by filling out our contact form or calling us directly. We'll schedule a consultation to discuss your project in detail."
              },
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. We provide detailed timelines during the initial consultation."
              },
              {
                question: "Do you offer warranties on your work?",
                answer: "Yes, we offer comprehensive warranties on all our construction work. The specific terms depend on the type of project."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 text-yellow-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-500 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-black mb-6">Ready to Start Your Project?</h2>
            <p className="text-black/80 text-xl mb-8">
              Contact us today and let's discuss how we can bring your vision to life.
            </p>
            <button className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  );
}