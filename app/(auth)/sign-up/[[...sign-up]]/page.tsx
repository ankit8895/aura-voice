import { SignUp } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/ui/themes";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp
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
