import React from 'react';

const AIAgentGenesis = () => {
  return (
    <div className="p-6 bg-[#0a0a0a] border border-blue-900/50 rounded-2xl shadow-xl">
      <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        AGENT GENESIS FACTORY
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-blue-900/10 rounded-lg border border-blue-500/20">
           <span className="text-sm text-blue-200">Self-Generating Explorer...</span>
           <div className="w-16 h-1 bg-blue-900 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-blue-500 animate-pulse"></div>
           </div>
        </div>
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all uppercase tracking-widest">
           Assemble New Agent
        </button>
      </div>
    </div>
  );
};

export default AIAgentGenesis;
