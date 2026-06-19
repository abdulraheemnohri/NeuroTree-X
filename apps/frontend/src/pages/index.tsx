import React from 'react';
import CyberTreeExplorer from '../components/CyberTreeExplorer';
import NodeDetailPanel from '../components/NodeDetailPanel';
import BrainDashboard from '../components/BrainDashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 font-sans">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            NEUROTREE X
          </h1>
          <p className="text-gray-500 font-mono tracking-widest text-xs mt-1 italic">
            AUTONOMOUS KNOWLEDGE UNIVERSE // VERSION 1.0.0-BETA
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-1 border border-cyan-900 rounded-full text-[10px] text-cyan-500 font-mono">SYSTEM: ONLINE</div>
          <div className="px-4 py-1 border border-blue-900 rounded-full text-[10px] text-blue-500 font-mono">LATENCY: 2MS</div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <BrainDashboard />
        </div>
        <div className="lg:col-span-2">
          <CyberTreeExplorer />
        </div>
        <div className="lg:col-span-1">
          <NodeDetailPanel />
        </div>
      </div>
    </div>
  );
}
