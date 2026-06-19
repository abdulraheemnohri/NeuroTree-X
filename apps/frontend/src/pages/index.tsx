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
import KnowledgeReview from '../components/KnowledgeReview';
import MultiModalInput from '../components/MultiModalInput';
import SearchSystem from '../components/SearchSystem';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <header className="flex justify-between items-center mb-10 relative z-10 px-4">
        <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
           </div>
           <div>
             <h1 className="text-4xl font-black tracking-tighter uppercase">NeuroTree X</h1>
             <p className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase italic">Autonomous Knowledge Fabric</p>
           </div>
        </div>

        <div className="flex gap-4 items-center">
           <nav className="flex gap-6 mr-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
              <Link href="/lab" className="hover:text-emerald-400 transition-all">Research Lab</Link>
              <Link href="/settings" className="hover:text-cyan-400 transition-all">Model Control</Link>
           </nav>
           <button className="px-6 py-2 bg-white text-black text-xs font-black rounded-lg hover:bg-gray-200 transition-all uppercase">
              Synaptic Sync
           </button>
        </div>
      </header>

      <div className="mb-12 relative z-20">
         <SearchSystem />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-3 space-y-6">
          <BrainDashboard />
          <AGIAssistant />
          <MultiModalInput />
          <SystemHealth />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <ThreeTree />
          <NeuroViz />
          <KnowledgeReview />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <NodeDetailPanel />
          <HologramMode />
          <AIAgentGenesis />
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
