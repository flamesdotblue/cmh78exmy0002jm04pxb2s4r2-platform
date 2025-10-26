import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-gray-900/70 pointer-events-none" />
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Transform your community with intelligent issue reporting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-gray-200"
            >
              Snap a photo, and our AI analyzes and categorizes it in real time. Faster resolution, cleaner streets, safer neighborhoods.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#report"
                className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-gray-900 font-semibold px-6 py-3 hover:bg-yellow-300 transition-colors"
              >
                Report an Issue
              </a>
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-md bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 hover:bg-white/20 transition-colors"
              >
                Join EAISER
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
