import React from 'react';
import { CheckCircle, AlertTriangle, Clock, MapPin } from 'lucide-react';
import StatCard from './StatCard';
import { motion } from 'framer-motion';

export default function ImpactMetricsSection() {
  return (
    <section id="metrics" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Community impact at a glance</h2>
          <p className="mt-3 text-gray-600">Real-time insights powered by AI to help cities prioritize and resolve issues faster.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <StatCard icon={CheckCircle} label="Issues Resolved" value="532" gradient="from-emerald-500 to-teal-500" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}>
            <StatCard icon={AlertTriangle} label="Open Issues" value="87" gradient="from-rose-500 to-orange-500" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <StatCard icon={Clock} label="Avg. Resolution" value="2.3 days" gradient="from-sky-500 to-indigo-500" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}>
            <StatCard icon={MapPin} label="Neighborhoods" value="42" gradient="from-fuchsia-500 to-violet-500" />
          </motion.div>
        </div>

        <div id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">AI Categorization</h3>
            <p className="mt-2 text-gray-600">Classifies issues like potholes, waste, and lighting with high accuracy to route them to the right teams.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">Real-time Tracking</h3>
            <p className="mt-2 text-gray-600">Stay updated on status changes and resolution progress across your neighborhood.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg bg-white p-6 shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">Insightful Dashboards</h3>
            <p className="mt-2 text-gray-600">Visualize trends, hotspots, and performance metrics to drive better decisions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
