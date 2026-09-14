import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { auth } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Text to Speech" };

export default async function TextToSpeechPage({
  searchParams,
}: {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}) {
  const { isAuthenticated, redirectToSignIn, orgId } = await auth();

  if (!isAuthenticated) return redirectToSignIn();
  if (!orgId) return redirect("/org-selection");
  const { text, voiceId } = await searchParams;

  prefetch(trpc.voices.getAll.queryOptions());
  prefetch(trpc.generations.getAll.queryOptions());
  return (
    <HydrateClient>
      <TextToSpeechView initialValues={{ text, voiceId }} />;
    </HydrateClient>
  );
}
