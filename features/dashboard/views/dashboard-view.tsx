import { PageHeader } from "@/components/page-header";
import { DashboardHeader } from "../components/dashboard-header";
import { QuickActionPanel } from "../components/quick-actions-panel";
import { TextInputPanel } from "../components/text-input-panel";

export function DashboardView() {
  return (
    <div className="relative bg-background">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionPanel />
      </div>
    </div>
  );
}
