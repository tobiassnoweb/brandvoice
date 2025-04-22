import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

const HeroSection = ({
  title = "Democratize AI with your authentic brand voice",
  subtitle = "BrandVoice makes advanced retrieval-augmented generation (RAG) accessible to any team — no need for expensive infrastructure, in-house AI experts, or custom engineering.",
  ctaPrimary = "Get Started",
  ctaSecondary = "Request Demo",
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[800px] bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 md:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="absolute top-8 left-8 md:top-12 md:left-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="BrandVoice Logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className="text-xl md:text-2xl font-bold text-slate-900">
              BrandVoice
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="text-base font-medium px-8">
              {ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium px-8"
            >
              {ctaSecondary}
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-sm p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-slate-900">
                        Brand Content
                      </h3>
                      <p className="text-xs text-slate-500">
                        Your authentic voice
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-slate-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>

                  <div className="mt-4 bg-slate-50 p-3 rounded-lg">
                    <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <div>
                  <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <div className="h-2 w-12 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <div className="h-2 w-12 bg-slate-200 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
