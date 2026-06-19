import React, { useState, useEffect } from 'react';

const CyberTreeExplorer = () => {
  const [nodes, setNodes] = useState([
    { id: 1, name: 'Root', type: 'core', color: 'text-white' },
    { id: 2, name: 'Quantum AI', type: 'technology', color: 'text-cyan-400' },
    { id: 3, name: 'Bio-Mimicry', type: 'science', color: 'text-emerald-400' },
    { id: 4, name: 'Neural Fabric', type: 'structure', color: 'text-purple-400' },
    { id: 5, name: 'Ethics Core', type: 'logic', color: 'text-amber-400' },
  ]);

  return (
    <div className="relative w-full h-[600px] bg-black rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_80px_-20px_rgba(0,0,0,1)]">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-black to-purple-900/5"></div>

      {/* Simulated Multi-color Tree Canvas */}
      <div className="relative z-10 p-12 flex flex-col items-center justify-center h-full">
         <div className="relative">
            {/* Center Node */}
            <div className="w-24 h-24 bg-white/5 backdrop-blur-3xl border-2 border-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-pulse">
               <span className="text-[10px] font-black tracking-widest uppercase">CORE</span>
            </div>

            {/* Connecting Lines (Simulated) */}
            <div className="absolute top-1/2 left-full w-48 h-px bg-gradient-to-r from-white to-cyan-500"></div>
            <div className="absolute top-1/2 right-full w-48 h-px bg-gradient-to-l from-white to-emerald-500"></div>
            <div className="absolute bottom-full left-1/2 w-px h-48 bg-gradient-to-t from-white to-purple-500"></div>
            <div className="absolute top-full left-1/2 w-px h-48 bg-gradient-to-b from-white to-amber-500"></div>

            {/* Orbiting Nodes */}
            <div className="absolute -right-64 -top-12 p-6 bg-cyan-900/20 backdrop-blur-xl border border-cyan-500/50 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)]">
               <span className="text-xs font-bold text-cyan-400 block mb-1">QUANTUM AI</span>
               <div className="w-full h-1 bg-cyan-900/50 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-cyan-400"></div>
               </div>
            </div>

            <div className="absolute -left-64 -top-12 p-6 bg-emerald-900/20 backdrop-blur-xl border border-emerald-500/50 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.2)]">
               <span className="text-xs font-bold text-emerald-400 block mb-1">BIO-MIMICRY</span>
               <div className="w-full h-1 bg-emerald-900/50 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-emerald-400"></div>
               </div>
            </div>

            <div className="absolute left-1/2 -top-64 -translate-x-1/2 p-6 bg-purple-900/20 backdrop-blur-xl border border-purple-500/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
               <span className="text-xs font-bold text-purple-400 block mb-1">NEURAL FABRIC</span>
               <div className="w-full h-1 bg-purple-900/50 rounded-full overflow-hidden">
                  <div className="w-5/6 h-full bg-purple-400"></div>
               </div>
            </div>

            <div className="absolute left-1/2 top-32 -translate-x-1/2 p-6 bg-amber-900/20 backdrop-blur-xl border border-amber-500/50 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.2)]">
               <span className="text-xs font-bold text-amber-400 block mb-1">ETHICS CORE</span>
               <div className="w-full h-1 bg-amber-900/50 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-amber-400"></div>
               </div>
            </div>
         </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
         <div>
            <h2 className="text-4xl font-black text-white tracking-tighter">NEURAL EXPLORER</h2>
            <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">Multicolor Synaptic Graph // Real-time Update</p>
         </div>
         <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
         </div>
      </div>
    </div>
  );
};

export default CyberTreeExplorer;
