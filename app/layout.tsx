import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crustrush.demo"),
  title: "CRUSTRUSH | Premium Pizza & Fast Food in Chandigarh",
  description:
    "Discover handcrafted pizzas, loaded sides and premium comfort food at CRUSTRUSH Chandigarh.",
  keywords: ["CRUSTRUSH", "pizza Chandigarh", "fast food Chandigarh", "pizza delivery Sector 17"],
  openGraph: {
    title: "CRUSTRUSH | Premium Pizza & Fast Food in Chandigarh",
    description:
      "Discover handcrafted pizzas, loaded sides and premium comfort food at CRUSTRUSH Chandigarh.",
    url: "https://crustrush.demo",
    siteName: "CRUSTRUSH",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRUSTRUSH | Premium Pizza & Fast Food in Chandigarh",
    description:
      "Discover handcrafted pizzas, loaded sides and premium comfort food at CRUSTRUSH Chandigarh.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
