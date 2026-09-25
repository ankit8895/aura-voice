import { DashboardView } from "@/features/dashboard/views/dashboard-view";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const { isAuthenticated, redirectToSignIn, orgId } = await auth();

  if (!isAuthenticated) return redirectToSignIn();
  if (!orgId) return redirect("/org-selection");
  return <>{isAuthenticated && orgId && <DashboardView />}</>;
}
