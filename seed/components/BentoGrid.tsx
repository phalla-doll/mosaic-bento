import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";
import { CATEGORIES, MORE_CATEGORIES } from "../constants";
import type { BentoItem, Category } from "../types";
import BentoCard from "./BentoCard";

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | string>(
    "All",
  );
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return items;
    // If selected category is in the main list
    if (CATEGORIES.includes(selectedCategory as any)) {
      return items.filter((item) => item.category === selectedCategory);
    }
    // If selected category is from the "More" list (mock filtering for now as items don't have these categories)
    // In a real app, items would have these categories. For now, show none or all to demonstrate UI.
    // Let's show a subset or empty state to simulate filtering.
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const _handleCategoryClick = (category: Category | string) => {
    if (category === "More") {
      setIsMoreOpen(!isMoreOpen);
    } else {
      setSelectedCategory(category);
      setIsMoreOpen(false);
    }
  };

  const handleMoreCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsMoreOpen(false);
  };

  return (
    <section className="w-full px-4 md:px-6 py-8 relative z-20">
      {/* Filter Bar */}
      <div className="mb-8 flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0 relative">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>

        <div className="relative">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar max-w-full">
            <div className="flex items-center rounded-full bg-neutral-900/50 p-1 border border-white/5 backdrop-blur-sm relative z-30">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? "text-black"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {selectedCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}

              {/* More Button */}
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isMoreOpen ||
                  (
                    !CATEGORIES.includes(selectedCategory as any) &&
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

          {/* Expandable Panel */}
          <AnimatePresence>
            {isMoreOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, y: 8, height: "auto", scale: 1 }}
                exit={{ opacity: 0, y: -10, height: 0, scale: 0.95 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="absolute right-0 top-full mt-2 w-full md:w-[480px] bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden z-20 origin-top-right"
              >
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {MORE_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleMoreCategorySelect(cat)}
                      className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat
                          ? "bg-white text-black font-medium"
                          : "text-neutral-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Grid */}
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
