"use client";

import { Button } from "@/components/ui/glass/button";
import { toast } from "sonner";

const Home = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => toast.success("Hello World!!!!")}
    >
      Click me
    </Button>
  );
};

export default Home;
