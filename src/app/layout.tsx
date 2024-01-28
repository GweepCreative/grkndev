import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gürkan Çiloğlu",
  description: "Software developer | Backend Developer | Lords of Bots",
  themeColor: "dark",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  colorScheme: "dark",

  icons: "/siteicon.png",
  metadataBase: new URL("https://grkndev.vercel.app"),
  openGraph: {
    type: "website",
    title: "Gürkan Çiloğlu",
    description: "Software developer | Backend Developer | Lords of Bots",
    url: "https://grkndev.vercel.app",
    siteName: "Gürkan Çiloğlu",
    locale: "en_US",
    images: { url: "/opengraph-image.png", width: 1200, height: 630 },
  },
  twitter: {
    images: {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      type: "image/png",
      alt: "Gürkan Çiloğlu",
    },
    card: "summary_large_image",
    creator: "@gweepcreative",
    site: "@gweepcreative",
    description: "Software Developer | Backend Developer | Lords of Bots",
    title: "grkn.dev | Gurkan Ciloglu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-full flex justify-center" lang="en">
      <body className="h-full max-w-[90rem] flex flex-col overflow-x-hidden md:px-20 sm:px-14 px-8 lg:px-24 text-white bg-[#121212] w-full">
        <div className={montserrat.className}>{children}</div>
      </body>
    </html>
  );
}
