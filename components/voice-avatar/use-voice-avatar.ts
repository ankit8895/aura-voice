// import { glass } from "@dicebear/collection";
import { Avatar, Style } from "@dicebear/core";
import glass from "@dicebear/styles/glass.json" with { type: "json" };
import { useMemo } from "react";

export function useVoiceAvatar(seed: string) {
  const style = new Style(glass);
  return useMemo(() => {
    return new Avatar(style, {
      seed,
      size: 128,
    }).toDataUri();
  }, [seed]);
}
