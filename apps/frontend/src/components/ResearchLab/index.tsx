import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const ResearchLab = () => {
  const [evolving, setEvolving] = useState(false);
  const activeProjects = [
    { id: '1', title: 'Recursive Synaptic Optimization', leader: 'Scientist-7', status: 'Experimenting', progress: 68 },
    { id: '2', title: 'Ethics Bottleneck Analysis', leader: 'Critic-1', status: 'Reviewing', progress: 92 },
    { id: '3', title: 'Hyper-Dimensional Knowledge Mapping', leader: 'Explorer-3', status: 'Mapping', progress: 45 }
  ];

  const triggerEvolution = () => {
    setEvolving(true);
    setTimeout(() => setEvolving(false), 3000);
  };

  return (
    <div className="p-8 bg-[#050505] min-h-screen">
      <header className="mb-12 flex justify-between items-end">
        <div>
           <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 uppercase tracking-tighter">
             AI Research Laboratory
           </h2>
           <p className="text-xs text-gray-500 font-mono mt-2 tracking-[0.2em]">MULTI-AGENT COLLABORATION ENVIRONMENT</p>
        </div>
        <button
           onClick={triggerEvolution}
           className={`px-8 py-3 rounded-2xl flex items-center gap-3 transition-all font-black text-xs uppercase tracking-widest ${
             evolving ? 'bg-amber-500 text-black animate-pulse' : 'bg-gray-900 text-amber-500 border border-amber-500/30'
           }`}
        >
           <Zap size={16} />
           {evolving ? 'Evolution in Progress...' : 'Trigger Global Evolution'}
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeProjects.map(project => (
          <div key={project.id} className="p-6 bg-gray-900/50 border border-emerald-900/30 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-all"></div>
            <h3 className="text-lg font-bold text-emerald-200 mb-1">{project.title}</h3>
            <p className="text-[10px] text-gray-500 font-mono uppercase mb-4">Lead: {project.leader}</p>

            <div className="flex justify-between items-end mb-2">
               <span className="text-[10px] font-bold text-emerald-500">{project.status}</span>
               <span className="text-xs font-mono text-gray-400">{project.progress}%</span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
               <div className={`h-full bg-emerald-500 ${evolving ? 'animate-ping' : 'animate-pulse'}`} style={{ width: `${project.progress}%` }}></div>
            </div>

            <button className="mt-6 w-full py-2 border border-emerald-500/20 rounded-xl text-[10px] font-bold hover:bg-emerald-500 hover:text-black transition-all uppercase tracking-widest">
               Observe Synapses
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchLab;
