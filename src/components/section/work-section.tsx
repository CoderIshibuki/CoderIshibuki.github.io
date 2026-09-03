/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-12 rounded-full bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-12 rounded-full overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-6">
      {DATA.work.map((work) => {
        const Wrapper = work.href && work.href !== "#" && work.href !== "" ? Link : "div";
        return (
          <div key={work.company} className="w-full grid gap-2">
            <Wrapper
              href={work.href || "#"}
              target={work.href && work.href !== "#" && work.href !== "" ? "_blank" : undefined}
              className="p-0 cursor-pointer transition-colors group"
            >
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {work.company}
                      {work.href && work.href !== "#" && work.href !== "" && (
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      )}
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              </div>
            </Wrapper>
          </div>
        );
      })}
    </div>
  );
}

