import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applied AI Works | AI Consulting for Service Businesses",
  description:
    "Applied AI Works helps HVAC, plumbing, landscaping, and trades businesses in West Michigan find where AI saves time and money. Start with a $1,500 AI Audit.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Applied AI Works LLC",
  url: "https://www.appliedaiworks.com",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-WSECL5KLBC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WSECL5KLBC');
        `}
      </Script>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body selection:bg-brand-orange selection:text-white`}
      >
        <MaterialSymbolsLoader />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
