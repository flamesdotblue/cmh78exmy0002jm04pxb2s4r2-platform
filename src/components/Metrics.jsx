import React from 'react';
import { CheckCircle, AlertTriangle, BarChart2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: CheckCircle, label: 'Issues Resolved', value: '532', gradient: 'from-emerald-500 to-teal-500' },
  { icon: AlertTriangle, label: 'Open Issues', value: '87', gradient: 'from-rose-500 to-orange-500' },
  { icon: BarChart2, label: 'AI Accuracy', value: '95%', gradient: 'from-indigo-500 to-blue-500' },
  { icon: MapPin, label: 'Neighborhoods', value: '42', gradient: 'from-fuchsia-500 to-violet-500' },
];

function StatCard({ icon: Icon, label, value, gradient }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition-shadow">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />
      <div className="p-5 flex items-center gap-4">
        <div className={`h-12 w-12 rounded-md bg-gradient-to-tr ${gradient} text-white grid place-items-center shrink-0`}>
          <Icon size={22} />
        </div>
        <div>
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-2xl font-semibold text-gray-900">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Community impact at a glance</h2>
          <p className="mt-3 text-gray-600">Real-time insights powered by AI to help cities prioritize and resolve issues faster.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 * idx }}>
              <StatCard {...item} />
            </motion.div>
          ))}
        </div>

        <div id="features" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">AI Categorization</h3>
            <p className="mt-2 text-gray-600">Classifies issues like potholes, waste, and lighting with high accuracy to route them to the right teams.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">Real-time Tracking</h3>
            <p className="mt-2 text-gray-600">Stay updated on status changes and resolution progress across your neighborhood.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-lg font-semibold">Insightful Dashboards</h3>
            <p className="mt-2 text-gray-600">Visualize trends, hotspots, and performance metrics to drive better decisions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
