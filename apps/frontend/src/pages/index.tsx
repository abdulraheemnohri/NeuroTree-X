import React from 'react';
import ThreeTree from '../components/ThreeTree';
import NodeDetailPanel from '../components/NodeDetailPanel';
import BrainDashboard from '../components/BrainDashboard';
import SimulationViewer from '../components/SimulationViewer';
import NeuroViz from '../components/NeuroViz';
import AIAgentGenesis from '../components/AIAgentGenesis';
import VoiceController from '../components/VoiceController';
import HologramMode from '../components/HologramMode';
import AGIAssistant from '../components/AGIAssistant';
import SystemHealth from '../components/SystemHealth';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <header className="flex justify-between items-center mb-10 relative z-10 px-4">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
           </div>
           <div>
             <h1 className="text-4xl font-black tracking-tighter uppercase">NeuroTree X</h1>
             <p className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase italic">Autonomous Knowledge Fabric</p>
           </div>
        </div>

        <div className="flex gap-4 items-center">
           <Link href="/lab" className="px-6 py-2 bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-black rounded-lg hover:bg-emerald-500 hover:text-black transition-all uppercase">
              Research Lab
           </Link>
           <button className="px-6 py-2 bg-white text-black text-xs font-black rounded-lg hover:bg-gray-200 transition-all uppercase">
              Enter Universe
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-3 space-y-6">
          <BrainDashboard />
          <AGIAssistant />
          <SystemHealth />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <ThreeTree />
          <NeuroViz />
          <AIAgentGenesis />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <NodeDetailPanel />
          <HologramMode />
          <SimulationViewer />

          <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-2xl">
             <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4">Neural Activity Log</h4>
             <div className="space-y-3 font-mono text-[10px]">
                <p className="text-cyan-500/80 underline underline-offset-4">>>> Researching 'Synaptic Weighting'</p>
                <p className="text-gray-500 italic">>>> New node 'Heuristic Alpha' created</p>
                <p className="text-emerald-500/80">>>> Digital Twin 'Core-01' sync successful</p>
                <p className="text-purple-500 animate-pulse">>>> Simulation 'Quantum Flux' running...</p>
             </div>
          </div>
        </div>
      </div>

      <VoiceController />
    </div>
  );
}
