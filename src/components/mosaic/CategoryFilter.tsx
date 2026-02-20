"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { CATEGORIES } from "@/data/mosaic";
import type { Category } from "@/types/mosaic";
import MoreCategoriesDropdown from "./MoreCategoriesDropdown";

interface CategoryFilterProps {
  selectedCategory: Category | string;
  onCategoryChange: (category: Category | string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleCategoryClick = (category: Category | string) => {
    if (category === "More") {
      setIsMoreOpen(!isMoreOpen);
    } else {
      onCategoryChange(category);
      setIsMoreOpen(false);
    }
  };

  const handleMoreCategorySelect = (category: string) => {
    onCategoryChange(category);
    setIsMoreOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full">
        <div className="flex items-center rounded-full bg-neutral-900/50 p-1 border border-white/5 backdrop-blur-sm relative z-30">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${selectedCategory === category ? "text-black" : "text-neutral-400 hover:text-white"}`}
              >
                {category}
              </span>
            </button>
          ))}

          {/* More Button */}
          <button
            type="button"
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
              isMoreOpen ||
              (
                !(CATEGORIES as readonly string[]).includes(selectedCategory) &&
                  selectedCategory !== "All"
              )
                ? "text-white"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <span className="relative z-10">More</span>
            <motion.div
              animate={{ rotate: isMoreOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={14} />
            </motion.div>
          </button>
        </div>
      </div>

      <MoreCategoriesDropdown
        isOpen={isMoreOpen}
        selectedCategory={selectedCategory}
        onClose={() => setIsMoreOpen(false)}
        onSelectCategory={handleMoreCategorySelect}
      />
    </div>
  );
};

export default CategoryFilter;
