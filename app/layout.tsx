import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TRPCReactProvider } from "@/trpc/client";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "AuraVoice",
    template: "%s | AuraVoice",
  },
  description: "AI-powered text-to-speech and voice cloning platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider
      appearance={{
        theme: shadesOfPurple,
      }}
    >
      <TRPCReactProvider>
        <html
          lang="en"
          className={`${jakarta.variable} h-full antialiased`}
          suppressHydrationWarning
        >
          <body className="min-h-dvh flex flex-col">
            <TooltipProvider>
              <NuqsAdapter>{children}</NuqsAdapter>
            </TooltipProvider>
            <Toaster />
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
