"use client";

import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useMemo, useState } from "react";
import type { BentoItem } from "@/types/mosaic";
import BentoCard from "./BentoCard";
import CategoryFilter from "./CategoryFilter";

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="w-full px-4 md:px-6 py-8 relative z-20">
      <div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 relative">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[280px] grid-flow-dense"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <BentoCard key={item.id} item={item} />)
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-20 text-center text-neutral-500"
            >
              No items found in this category.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
