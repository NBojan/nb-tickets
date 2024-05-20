import "./globals.css";
import type { Metadata } from "next";
import { Cabin, Quicksand } from "next/font/google";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand" 
});
const cabin = Cabin({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cabin" 
});

export const metadata: Metadata = {
  title: "NB Tickets",
  description: 'NB Tickets. Project made for learning and self-development.',
  keywords: "NB, NBojan, nbojan, ticket, tickets, work, project, development, focus, employee",
  openGraph: {
    title: 'NB Tickets',
    description: 'NB Tickets. Project made for learning and self-development.',
    url: 'https://nb-twitter.vercel.app/',
    siteName: 'NB Tickets',
    images: [
      {
        url: 'https://v5.airtableusercontent.com/v3/u/29/29/1716213600000/faeFjPhmRvN_vkiX1lXbHg/vcqb5u6v5SsHuHk1l3-ZZegXVeohHA2Q0K3KpjI042yOAMvcYBEcGMK_zHNQbPL3hPevVIwow6QEl63JF6XsDh5n12S22XEUskH5l13Hxiztnm9kzuvM92JkPVyV08tbEgGKwPqMp0Qmv0CylacCEQ/PNw24021Sd6gC3INjTh2vZkbjfajGb_mAF8tp22MhQE',
        width: 1280,
        height: 637,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'NB Tickets',
    site: 'NB Tickets',
    description: 'NB Tickets. Project made for learning and self-development.',
    images: [
      {
        url: 'https://v5.airtableusercontent.com/v3/u/29/29/1716213600000/faeFjPhmRvN_vkiX1lXbHg/vcqb5u6v5SsHuHk1l3-ZZegXVeohHA2Q0K3KpjI042yOAMvcYBEcGMK_zHNQbPL3hPevVIwow6QEl63JF6XsDh5n12S22XEUskH5l13Hxiztnm9kzuvM92JkPVyV08tbEgGKwPqMp0Qmv0CylacCEQ/PNw24021Sd6gC3INjTh2vZkbjfajGb_mAF8tp22MhQE',
        width: 1280,
        height: 637,
      },
    ],
    creator: 'NBojan',
    creatorId: 'NBojan',
    card: 'summary'
  }
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${cabin.variable}`}>
      <body className="bg-indigo-50">
        {children}
      </body>
    </html>
  );
}
