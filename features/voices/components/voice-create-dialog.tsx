"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { VoiceCreateForm } from "./voice-create-form";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCheckout } from "@/features/billing/hooks/use-checkout";
import { useCallback } from "react";
import { toast } from "sonner";

interface VoiceCreateDialogProps {
  children?: React.ReactElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function VoiceCreateDialog({
  children,
  open,
  onOpenChange,
}: VoiceCreateDialogProps) {
  const isMobile = useIsMobile();
  const { checkout } = useCheckout();

  const handleError = useCallback(
    (message: string) => {
      if (message === "SUBSCRIPTION_REQUIRED") {
        toast.error("Subscription required", {
          action: {
            label: "Subscribe",
            onClick: () => checkout(),
          },
        });
      } else {
        toast.error(message);
      }
    },
    [checkout],
  );

  if (isMobile)
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        {children && <DrawerTrigger>{children}</DrawerTrigger>}
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create custom voice</DrawerTitle>
            <DrawerDescription>
              Upload or record an audio sample to add a new voice to your
              library
            </DrawerDescription>
          </DrawerHeader>
          <VoiceCreateForm
            scrollable
            onError={handleError}
            footer={(submit) => (
              <DrawerFooter>
                {submit}
                <DrawerClose render={<Button variant={"outline"}></Button>}>
                  Cancel
                </DrawerClose>
              </DrawerFooter>
            )}
          />
        </DrawerContent>
      </Drawer>
    );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger render={children}>{children}</DialogTrigger>}
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Create custom voices</DialogTitle>
          <DialogDescription>
            Upload or record an audio sample to add a new voiceto your library
          </DialogDescription>
        </DialogHeader>
        <VoiceCreateForm onError={handleError} />
      </DialogContent>
    </Dialog>
  );
}
