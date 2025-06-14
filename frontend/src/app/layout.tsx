import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: 'TutorsDial – Empower Your Productivity',
  description: 'TutorsDial helps you streamline tasks, track progress, and collaborate efficiently—all in one intuitive platform.',
  metadataBase: new URL('https://www.tutorsdial.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-ES': '/es',
    },
  },
  keywords: ['productivity', 'task management', 'collaboration software'],
  openGraph: {
    title: 'TutorsDial – Empower Your Productivity',
    description: 'Connect with verified tutors and real students on TutorsDial.com—your trusted platform for finding quality tutoring and learning opportunities.',
    url: 'https://www.tutorsdial.com',
    siteName: 'TutorsDial',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.tutorsdial.com/og/homepage.png',
        width: 1200,
        height: 630,
        alt: 'TutorsDial dashboard preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TutorsDial – Empower Your Productivity',
    description: 'Connect with verified tutors and real students on TutorsDial.com—your trusted platform for finding quality tutoring and learning opportunities.',
    images: ['https://www.tutorsdial.com/og/homepage.png'],
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
