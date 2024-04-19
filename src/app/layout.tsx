import "@/app/globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import { sharedTitle, sharedDescription } from "@/app/shared-metadata";
import { PROFILES } from "@/lib/constants";
import Navbar from "@/components/Layout/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-4`}>
        <main className=" bg-white">
          <div className="lg:flex">
            <div className="relative hidden lg:flex w-[20em]">
              <Navbar />
            </div>
            <div className="flex flex-1 items-center justify-center">
              {children}
            </div>
          </div>
        </main>
        <SpeedInsights />
        <Toaster />
        <Script
          src="https://unpkg.com/@tinybirdco/flock.js"
          data-host="https://api.tinybird.co"
          data-token={process.env.NEXT_PUBLIC_TINYBIRD_TOKEN}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL("https://grkn.dev"),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    alt: sharedTitle,
    type: "website",
    url: "/",
    siteName: sharedTitle,
    locale: "en_IE",
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    site: `@${PROFILES.twitter.username}`,
    creator: `@${PROFILES.twitter.username}`,
  },
  other: {
    pinterest: "nopin",
  },
};

export const viewport = {
  themeColor: "white",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};
