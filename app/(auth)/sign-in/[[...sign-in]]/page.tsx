import { SignIn } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
          },
          theme: shadesOfPurple,
        }}
      />
      ;
    </div>
  );
}
