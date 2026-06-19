import React from 'react';
import { Activity, Shield, Cpu, Globe } from 'lucide-react';

const SystemHealth = () => {
  const services = [
    { name: 'Synaptic Gateway', status: 'optimal', latency: '1ms', icon: Shield },
    { name: 'Research Lab', status: 'optimal', latency: '14ms', icon: Cpu },
    { name: 'Agent Genesis', status: 'active', latency: '4ms', icon: Activity },
    { name: 'P2P Network', status: 'syncing', latency: '42ms', icon: Globe }
  ];

  return (
    <div className="p-6 bg-[#080808] border border-gray-800 rounded-2xl">
      <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 italic">System Cohesion Monitor</h3>
      <div className="space-y-3">
        {services.map(s => (
          <div key={s.name} className="flex justify-between items-center p-3 bg-black border border-gray-900 rounded-xl">
            <div className="flex items-center gap-3">
              <s.icon size={14} className="text-cyan-500" />
              <span className="text-[10px] font-bold text-gray-300">{s.name}</span>
            </div>
            <div className="text-right">
               <p className="text-[8px] text-cyan-500 font-mono uppercase">{s.status}</p>
               <p className="text-[8px] text-gray-700 font-mono">{s.latency}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;
