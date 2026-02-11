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
  title: "DevToolKit – Free Online Developer Tools, Formatters & Security Utilities",
  description: "DevToolKit offers fast, free, and privacy-friendly online developer tools including JSON formatter, Base64 encoder, UUID generator, SSL checker, DNS lookup, and security scanners - all in one place.",
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
  authors: [{ name: "DevToolKit" }],
  creator: "DevToolKit",
  // metadataBase: new URL("https://yourdomain.in"),
  openGraph: {
    title: "DevToolKit – Free Online Developer Tools",
    description: "Fast, private, and free developer tools including JSON formatter, Base64 encoder, UUID generator, SSL checker, and more.",
    // url: "https://yourdomain.in",
    siteName: "DevToolKit",
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
    </html>
  );
}
