"use client";

import { Button } from "@/components/ui/button";
import { useSpeech } from "@/lib/hooks/use-speech";

const TEXT =
  "Accessibility isn't an extra feature — it's part of the design from the very start.";

export function SpeakButton() {
  const { speak } = useSpeech();

  return (
    <Button
      variant="outline"
      onClick={() => speak(TEXT)}
      className="gap-2"
      aria-label="Listen to accessibility statement"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
      Listen
    </Button>
  );
}
