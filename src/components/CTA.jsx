import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">About Eaiser.ai</h2>
            <p className="mt-3 text-gray-600">Easier reporting. Faster resolution. Stronger communities. Our AI categorizes issues, prioritizes severity, and streamlines communication for quicker action.</p>
            <div className="mt-6 flex gap-3">
              <a href="#signup" className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white font-semibold px-6 py-3 hover:bg-indigo-700">Create account</a>
              <a href="#report" className="inline-flex items-center justify-center rounded-md bg-white border border-gray-200 text-gray-900 font-semibold px-6 py-3 hover:bg-gray-50">Report an issue</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-xl p-1 bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500">
            <div className="rounded-lg p-8 bg-white">
              <ul className="space-y-3 text-gray-700">
                <li>— Snap and submit photos of local issues</li>
                <li>— AI auto-categorizes and prioritizes reports</li>
                <li>— Track status changes in real time</li>
                <li>— See trends with modern dashboards</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
