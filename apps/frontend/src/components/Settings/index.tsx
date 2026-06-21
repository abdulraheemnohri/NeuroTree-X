import React from 'react';
import { Cpu, Database, Network, Shield } from 'lucide-react';

const Settings = () => {
  const modelStacks = [
    { name: 'Gemma-2-9b', type: 'Primary Reasoner', status: 'ACTIVE', size: '5.4GB' },
    { name: 'Mistral-Nemo', type: 'Creative Synthesizer', status: 'READY', size: '4.8GB' },
    { name: 'BGE-M3', type: 'Embedding Core', status: 'ACTIVE', size: '1.2GB' }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-12">
      <section>
         <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
            <Cpu className="text-cyan-500" /> Synaptic Engine Control
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modelStacks.map(model => (
              <div key={model.name} className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl flex justify-between items-center group hover:border-cyan-500/30 transition-all">
                 <div>
                    <h4 className="text-sm font-bold text-gray-200">{model.name}</h4>
                    <p className="text-[10px] text-gray-600 font-mono mt-1 uppercase tracking-widest">{model.type}</p>
                 </div>
                 <div className="text-right">
                    <span className={`text-[8px] font-black px-2 py-1 rounded ${model.status === 'ACTIVE' ? 'bg-cyan-900/30 text-cyan-400' : 'bg-gray-800 text-gray-500'}`}>
                       {model.status}
                    </span>
                    <p className="text-[8px] text-gray-700 mt-2 font-mono">{model.size}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <section>
         <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
            <Database className="text-purple-500" /> Knowledge Infrastructure
         </h3>
         <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-900">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Neo4j Cluster Status</span>
               <span className="text-[10px] text-emerald-500 font-mono uppercase font-black">Connected // 3 Nodes</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-900">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Vector Core (Qdrant)</span>
               <span className="text-[10px] text-emerald-500 font-mono uppercase font-black">Synchronized</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Distributed P2P Sync</span>
               <span className="text-[10px] text-cyan-500 font-mono uppercase font-black">Active Peers: 7</span>
            </div>
         </div>
      </section>

      <div className="flex gap-4">
         <button className="flex-1 py-4 bg-white text-black text-xs font-black uppercase rounded-2xl hover:bg-gray-200 transition-all">
            Save Synaptic Prefs
         </button>
         <button className="flex-1 py-4 border border-red-900/30 text-red-500 text-xs font-black uppercase rounded-2xl hover:bg-red-900/10 transition-all">
            Purge Neural Cache
         </button>
      </div>
    </div>
  );
};

export default Settings;
