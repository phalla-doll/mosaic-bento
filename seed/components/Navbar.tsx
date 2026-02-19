import { Layers, Menu, Search } from "lucide-react";
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md w-full">
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <span className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                <Layers className="text-blue-500" />
                MOSAIC
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="#"
                  className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Discover
                </a>
                <a
                  href="#"
                  className="rounded-full px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Creators
                </a>
                <a
                  href="#"
                  className="rounded-full px-4 py-2 text-sm font-medium text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block group">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search
                  size={16}
                  className="text-neutral-500 group-focus-within:text-white transition-colors"
                />
              </div>
              <input
                type="text"
                className="block w-64 rounded-full border border-neutral-800 bg-neutral-900 py-2 pl-10 pr-3 text-sm text-neutral-300 placeholder-neutral-500 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-600 transition-all"
                placeholder="Search resources..."
              />
            </div>
            <button className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-neutral-200 md:block transition-colors">
              Log In
            </button>
            <button className="md:hidden text-neutral-400 hover:text-white">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
