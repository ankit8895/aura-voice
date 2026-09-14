import { SignUp } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp
        fallbackRedirectUrl={"/org-selection"}
        signInForceRedirectUrl={"/org-selection"}
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
