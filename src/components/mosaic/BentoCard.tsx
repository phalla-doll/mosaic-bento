"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type React from "react";
import type { BentoItem } from "@/types/mosaic";

interface BentoCardProps {
  item: BentoItem;
}

const BentoCard: React.FC<BentoCardProps> = ({ item }) => {
  const _getSpanClasses = (size: BentoItem["size"]) => {
    switch (size) {
      case "big":
        return "col-span-1 row-span-1 md:col-span-2 md:row-span-2";
      case "wide":
        return "col-span-1 row-span-1 md:col-span-2 md:row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      default:
        return "col-span-1 row-span-1";
    }
  };

  const textColorClass = item.darkText ? "text-black" : "text-white";
  const subTextColorClass = item.darkText
    ? "text-neutral-600"
    : "text-neutral-300";
  const buttonBgClass = item.darkText
    ? "bg-black text-white hover:bg-neutral-800"
    : "bg-white text-black hover:bg-neutral-200";

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 h-full">
      {/* Background Image */}
      {item.imageUrl && (
        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute inset-0 h-[120%] w-full -top-[10%]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between">
          {item.date && (
            <span
              className={`text-xs font-medium uppercase tracking-wider ${subTextColorClass} opacity-80`}
            >
              {item.date}
            </span>
          )}
          <button
            type="button"
            className={`rounded-full p-2 transition-transform hover:scale-110 opacity-0 group-hover:opacity-100 duration-300 ${buttonBgClass}`}
          >
            <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="mt-auto">
          <h3
            className={`font-bold leading-tight ${textColorClass} ${item.size === "small" ? "text-xl" : "text-2xl md:text-3xl"}`}
          >
            {item.title}
          </h3>

          {item.description && (
            <p
              className={`mt-3 text-sm font-medium leading-relaxed ${subTextColorClass} line-clamp-3`}
            >
              {item.description}
            </p>
          )}

          {item.cta && (
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold cursor-pointer group/btn w-fit">
              <span className={item.darkText ? "text-black" : "text-white"}>
                {item.cta}
              </span>
              <ArrowRight
                size={14}
                className={`transition-transform duration-300 group-hover/btn:translate-x-1 ${textColorClass}`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoCard;
