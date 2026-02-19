import type React from "react";
import { TESTIMONIALS } from "@/data/mosaic";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  const getSpanClasses = (index: number) => {
    const pattern = [
      "md:col-span-2",
      "md:col-span-1",
      "md:col-span-1",
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-1",
    ];
    return pattern[index % pattern.length];
  };

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-24 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
            Loved by builders
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Join thousands of developers and designers who are building the
            future with Mosaic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              className={`relative p-8 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm hover:bg-neutral-900/80 transition-colors group flex flex-col justify-between ${getSpanClasses(index)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
