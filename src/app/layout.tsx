import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chirammalconstructions.com'),
  title: 'Chirammel Constructions - Best Construction Company in Thrissur, Kerala',
  description: 'Leading construction company in Thrissur with 30+ years experience. Specializing in residential, commercial construction, interior design & renovation services across Kerala. Best-in-class building solutions with competitive pricing.',
  keywords: 'construction, chirammal constructions, chirammel constructions, chiramel constructions, chiramal constructions, chiramal,chirrammal, chirammel, building, renovation, interior design, project management, sustainable construction,thrissur based construction services,thrissur construction,all kerala construction, modification of houses thrissur, finishing works, kerala house, kerala home , kerals house constructions, flat construction services, thalaore, thrissur, interior, interior designers, interior designers kerala, exterior constructions, kerala construction, small house construction, house construction, house construction in thrissur,house construction in kerala, 30 years of experience in construction, kerala largets constrution services, thrissur based ,construction, building, renovation, interior design, project management, sustainable construction, thrissur based construction services, thrissur construction, all kerala construction, modification of houses thrissur, finishing works, kerala house, kerala home, kerala house constructions, flat construction services, thaloor, thrissur, interior, interior designers, interior designers kerala, exterior constructions, kerala construction, small house construction, house construction, house construction in thrissur, house construction in kerala, 30 years of experience in construction, kerala largest construction services, thrissur based, villa construction, apartment construction, commercial buildings, residential projects, building contractors, civil engineering, architecture design, home renovation, building maintenance, construction company thrissur, construction materials, turnkey projects, premium housing, budget homes, luxury villas, modern house design, traditional kerala homes, eco-friendly construction, green building, construction cost estimation, building permits kerala, construction consultation, home builders thrissur, best construction company kerala, construction services thaloor, house plans kerala style, contemporary house designs, construction management, building restoration, home remodeling, construction supervision, best builders in thrissur, house construction kerala, വീട് നിർമ്മാണം തൃശ്ശൂർ, കെട്ടിട നിർമ്മാണം, construction contractors kerala, building construction thrissur, house builders thrissur, residential construction kerala, commercial construction thrissur, interior designers kerala, renovation services thrissur, affordable house construction, luxury villa construction, apartment builders kerala, construction cost kerala, building contractors thrissur, civil engineers kerala, architecture firms thrissur, home renovation services, building maintenance kerala, turnkey projects thrissur, premium housing kerala, budget homes thrissur, modern house design kerala, traditional kerala homes, eco-friendly construction, construction supervision, building permits kerala, construction consultation thrissur, construction material suppliers, real estate developers thrissur, property construction kerala',
  authors: [{ name: 'Chirammel Construction' }],
  applicationName: 'Chirammel Constructions',
  referrer: 'origin-when-cross-origin',
  creator: 'Chirammel Construction Team',
  publisher: 'Chirammel Constructions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'construction',
  openGraph: {
    type: 'website',
    title: 'Chirammel Construction - Excellence in Construction',
    description: 'Chirammel Construction provides high-quality residential, commercial, and sustainable building solutions.',
    locale: 'en_IN',
    siteName: 'Chirammal Constructions',
    images: ['/images/construction_banner.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chirammel Construction - Excellence in Construction',
    description: 'High-quality construction services, including commercial and residential projects.',
    images: ['/images/construction_banner.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  alternates: {
    canonical: 'https://chirammalconstructions.com',
    languages: {
      'en-US': 'https://chirammalconstructions.com/en-US',
      'ml-IN': 'https://chirammalconstructions.com/ml-IN',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "name": "Chirammel Constructions",
              "image": "https://chirammalconstructions.com/images/construction_banner.jpg",
              "@id": "https://chirammalconstructions.com",
              "url": "https://chirammalconstructions.com",
              "telephone": "+919895466438",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "Thalore",
                "streetAddress": "Thalore",
                "addressLocality": "Thrissur",
                "addressRegion": "Kerala",
                "postalCode": "680306",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.451378,
                "longitude": 76.262321
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
