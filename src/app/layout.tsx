import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
  icons: {
    icon: "/images/portfolio.thumbnail.webp",
  },
  description:
    "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
  keywords: [
    "Leonardo Juan Pablo Valdez",
    "Leonardo Valdez",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Next.js",
    "SaaS applications",
    "web development",
    "e-commerce backend",
    "AI prompt engineering",
    "responsive design",
    "JavaScript developer",
    "agile developer",
    "UI/UX developer",
    "scalable web applications",
    "Tucuman Argentina developer",
  ],
  alternates: {
    canonical: "https://vleonardojuanpablo.vercel.app/",
    languages: {
      en: "https://vleonardojuanpablo.vercel.app/",
      es: "https://vleonardojuanpablo.vercel.app/",
    },
  },
  openGraph: {
    title:
      "Leonardo Valdez | Frontend Developer Portfolio – React, TypeScript, Next.js Expert",
    description:
      "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js. Connect with Leonardo to bring high-quality, scalable web solutions to life.",
    url: "https://vleonardojuanpablo.vercel.app/",
    type: "website",
    images: [
      {
        url: "/images/portfolio-thumbnail.webp", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Leonardo Valdez Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Valdez | Frontend Developer Portfolio",
    description:
      "Explore the portfolio of Leonardo Valdez, a skilled Frontend Developer specializing in React, TypeScript, and Next.js.",
    images: ["/images/portfolio-thumbnail.webp"], // Replace with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
