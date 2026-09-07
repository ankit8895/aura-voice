import { OrganizationList } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";

export default function OrgSelectionPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl={"/"}
        afterSelectOrganizationUrl={"/"}
        appearance={{
          elements: {
            rootBox: "mx-auto",
          },
          theme: shadesOfPurple,
        }}
      />
    </div>
  );
}
