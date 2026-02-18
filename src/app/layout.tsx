import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevsToolKit – Free Online Developer Tools, Formatters & Security Utilities",
  description: "DevsToolKit offers fast, free, and privacy-friendly online developer tools including JSON formatter, Base64 encoder, UUID generator, SSL checker, DNS lookup, and security scanners - all in one place.",
  keywords: [
    // "developer tools online",
    // "json formatter",
    // "base64 encoder",
    // "uuid generator",
    // "ssl checker",
    // "dns lookup tool",
    // "security headers scanner",
    // "free dev tools",
    // "online coding utilities",
  ],
  authors: [{ name: "DevsToolKit" }],
  creator: "DevsToolKit",
  metadataBase: new URL("https://devstoolkit.link/"),
  openGraph: {
    title: "DevsToolKit – Free Online Developer Tools",
    description: "Fast, private, and free developer tools including JSON formatter, Base64 encoder, UUID generator, SSL checker, and more.",
    url: "https://devstoolkit.link/",
    siteName: "DevsToolKit",
    type: "website",
  },
};

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
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string} />
    </html>
  );
}
