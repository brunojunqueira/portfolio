"use client";

import { MiniSite } from "./mini-site";

export function PhoneFrame() {
  return (
    <div
      role="img"
      aria-label="Portfolio preview on a mobile device"
      className="relative shrink-0 w-50 h-105 md:w-75 md:h-155"
    >
      <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border-[5px] md:border-[6px] border-foreground bg-foreground shadow-2xl overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-8 bg-black z-10 flex items-end justify-center pb-1">
          <div className="w-20 h-4 bg-black rounded-b-2xl border-x border-b border-neutral-800" />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <MiniSite />
        </div>
        <div className="absolute bottom-2 inset-x-0 flex justify-center z-10">
          <div className="w-16 md:w-24 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      <div className="absolute -left-2 top-16 w-1.5 h-6  bg-neutral-700 rounded-l-sm" />
      <div className="absolute -left-2 top-26 w-1.5 h-10 bg-neutral-700 rounded-l-sm" />
      <div className="absolute -left-2 top-40 w-1.5 h-10 bg-neutral-700 rounded-l-sm" />
    </div>
  );
}
