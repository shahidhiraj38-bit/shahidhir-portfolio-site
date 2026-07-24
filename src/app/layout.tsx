import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "shahidhir | Dhir Bahadur Shahi",
    template: "%s | shahidhir"
  },
  description: "AI marketing expert, business growth consultant, motivational speaker, and personal branding strategist.",
  keywords: ["AI marketing", "business consulting", "personal branding", "Dhir Bahadur Shahi", "shahidhir"],
  openGraph: {
    title: "shahidhir | AI Marketing Expert",
    description: "Grow your business smarter with AI marketing, strategy, and mindset transformation.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
