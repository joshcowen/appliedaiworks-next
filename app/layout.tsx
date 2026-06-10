import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applied AI Works — AI Consulting for West Michigan",
  description:
    "Applied AI Works helps HVAC, plumbing, landscaping, and trades businesses in West Michigan find where AI saves time and money. Start with a $1,500 AI Audit.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Applied AI Works LLC",
  url: "https://www.appliedaiworks.com",
  email: "josh@appliedaiworks.com",
  description:
    "AI consulting for service businesses and skilled trades in West Michigan. AI audits, training, and implementation. Based in Zeeland, MI.",
  founder: {
    "@type": "Person",
    name: "Josh Cowen",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 92nd Ave",
    addressLocality: "Zeeland",
    addressRegion: "MI",
    postalCode: "49464",
    addressCountry: "US",
  },
  openingHours: "Mo-Fr 08:00-18:00",
  areaServed: [
    { "@type": "City", name: "Holland", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Zeeland", containedInPlace: { "@type": "State", name: "Michigan" } },
    { "@type": "City", name: "Grand Rapids", containedInPlace: { "@type": "State", name: "Michigan" } },
  ],
  priceRange: "$$",
  knowsAbout: ["Artificial Intelligence", "Business Automation", "AI Consulting", "Workflow Automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body selection:bg-brand-orange selection:text-white`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
