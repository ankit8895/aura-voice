import { DashboardView } from "@/features/dashboard/views/dashboard-view";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const { isAuthenticated, redirectToSignIn } = await auth();

  if (!isAuthenticated) return redirectToSignIn();
  return <DashboardView />;
}
