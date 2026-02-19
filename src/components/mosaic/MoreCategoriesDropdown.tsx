import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { MORE_CATEGORIES } from "@/data/mosaic";

interface MoreCategoriesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

const MoreCategoriesDropdown: React.FC<MoreCategoriesDropdownProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: 8, height: "auto", scale: 1 }}
          exit={{ opacity: 0, y: -10, height: 0, scale: 0.95 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="absolute right-0 top-full mt-2 w-full md:w-[480px] bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden z-20 origin-top-right"
          onClick={onClose}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {MORE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCategory(cat);
                }}
                className="text-left px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white/5"
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoreCategoriesDropdown;
