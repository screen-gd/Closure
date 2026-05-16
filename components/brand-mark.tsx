import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative block", className)} aria-hidden="true">
      <span className="absolute left-[3px] top-[4px] h-[25px] w-[10px] -rotate-45 rounded-[3px] bg-[#080d13]" />
      <span className="absolute left-[13px] top-[4px] h-[31px] w-[10px] -rotate-45 rounded-[3px] bg-[#080d13]" />
      <span className="absolute left-[23px] top-[4px] h-[25px] w-[10px] -rotate-45 rounded-[3px] bg-[#080d13]" />
    </span>
  );
}
