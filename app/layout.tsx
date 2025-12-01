import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HacFy - VAPT & Penetration Testing Services",
  description:
    "End-to-end penetration testing for Web, Mobile, Network, Cloud & APIs. Real exploitation, PoC evidence, and business-impact reporting.",
  generator: "v0.app",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#D60000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={`font-sans antialiased bg-black text-white`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent XSS attacks by disabling console in production
              if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
                console.log = () => {}
                console.error = () => {}
                console.warn = () => {}
                console.info = () => {}
              }
              
              // Disable right-click context menu in production
              if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
                document.addEventListener('contextmenu', (e) => {
                  e.preventDefault()
                })
              }
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
