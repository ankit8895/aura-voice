// Import global styles and fonts
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import NotFoundwithGlitchyText from "@/components/not-found-with-glitchytext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={jakarta.className}>
      <body>
        <NotFoundwithGlitchyText />
      </body>
    </html>
  );
}
