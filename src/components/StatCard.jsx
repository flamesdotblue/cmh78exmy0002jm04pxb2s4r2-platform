import React from 'react';

export default function StatCard({ icon: Icon, label, value, gradient = 'from-indigo-500 to-violet-500' }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow hover:shadow-md transition-shadow">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradient}`} />
      <div className="p-5 flex items-center gap-4">
        <div className={`h-12 w-12 rounded-md bg-gradient-to-tr ${gradient} text-white grid place-items-center shrink-0`}>
          {Icon ? <Icon size={22} /> : null}
        </div>
        <div>
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-2xl font-semibold text-gray-900">{value}</div>
        </div>
      </div>
    </div>
  );
}
