import { TextToSpeechDetailView } from "@/features/text-to-speech/views/text-to-speech-detail-view";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function TextToSpeechDetailPage({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) {
  const { generationId } = await params;
  const { isAuthenticated, orgId, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();
  if (!orgId) return redirect("/org-selection");

  prefetch(trpc.generations.getById.queryOptions({ id: generationId }));
  prefetch(trpc.voices.getAll.queryOptions());
  prefetch(trpc.generations.getAll.queryOptions());

  return (
    <HydrateClient>
      {isAuthenticated && orgId && (
        <TextToSpeechDetailView generationId={generationId} />
      )}
    </HydrateClient>
  );
}
