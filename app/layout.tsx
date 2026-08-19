import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/glass/sonner";
import { ClerkProvider } from "@clerk/nextjs";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "AuraVoice",
  description: "AI-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${jakarta.variable} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col">
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
