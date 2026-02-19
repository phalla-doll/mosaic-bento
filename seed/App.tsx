import { ArrowRight } from "lucide-react";
import type React from "react";
import BentoGrid from "./components/BentoGrid";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import { ITEMS } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-foreground font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="w-full">
        {/* Hero Section - Reduced vertical padding for tighter look */}
        <div className="relative isolate overflow-hidden pt-12 pb-8 md:pt-20 md:pb-12 border-b border-white/5">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-7xl mb-6">
                The world’s best
                <br />
                <span className="text-neutral-500">design gallery.</span>
              </h1>
              <p className="mt-4 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
                A curated collection of the finest interface designs,
                components, and layouts. Built for inspiration.
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-200 transition-colors"
                >
                  Submit Design
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white flex items-center gap-1 group"
                >
                  Explore Collection{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Subtler Background Gradient */}
          <div
            className="absolute top-0 -z-10 transform-gpu overflow-hidden blur-3xl w-full flex justify-center opacity-30"
            aria-hidden="true"
          >
            <div
              className="relative aspect-[1155/678] w-[70rem] -translate-x-1/2 bg-gradient-to-tr from-[#2a2a2a] to-[#404040] sm:left-[50%] sm:w-[80rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>

        {/* The Grid */}
        <BentoGrid items={ITEMS} />

        {/* Testimonials */}
        <Testimonials />
      </main>

      <footer className="border-t border-white/10 bg-black py-12">
        <div className="w-full px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; 2024 Mosaic Design Systems.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
