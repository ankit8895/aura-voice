import { OrganizationList } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { shadesOfPurple } from "@clerk/ui/themes";

export default async function OrgSelectionPage() {
  const { isAuthenticated } = await auth();
  return (
    <div className="flex min-h-screen items-center justify-center">
      {isAuthenticated && (
        <OrganizationList
          hidePersonal
          afterCreateOrganizationUrl={"/dashboard"}
          afterSelectOrganizationUrl={"/dashboard"}
          appearance={{
            elements: {
              rootBox: "mx-auto",
            },
            theme: shadesOfPurple,
          }}
        />
      )}
    </div>
  );
}
