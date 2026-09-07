import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { History } from "lucide-react";
import { SettingsPanelHistory } from "./settings-panel-history";

export function HistoryDrawer() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant={"outline"} size={"sm"}></Button>}>
        <History className="size-4" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>History</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto">
          <SettingsPanelHistory />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
