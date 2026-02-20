"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useRef } from "react";
import type { Testimonial } from "@/types/mosaic";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      <div
        className="absolute top-8 right-8 text-neutral-800 group-hover:text-neutral-700 transition-colors"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
        </svg>
      </div>

      <div className="flex flex-col h-full justify-between relative">
        <blockquote
          className={`text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed ${index % 3 === 0 ? "font-medium text-white" : ""}`}
        >
          "{testimonial.quote}"
        </blockquote>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden border border-white/10 shrink-0">
            {testimonial.avatarUrl ? (
              <div className="w-full h-full relative">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-500 font-medium">
                {testimonial.author.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <div className="font-semibold text-white">{testimonial.author}</div>
            <div className="text-sm text-neutral-500">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
