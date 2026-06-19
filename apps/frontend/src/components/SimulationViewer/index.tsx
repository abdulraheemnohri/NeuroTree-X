import React from 'react';

const SimulationViewer = () => {
  const activeSims = [
    { id: '1', name: 'Quantum Core Stress Test', type: 'physics', status: 'running' },
    { id: '2', name: 'Social Heuristic Evolution', type: 'agent-training', status: 'initializing' }
  ];

  return (
    <div className="p-6 bg-black border border-purple-900 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
        ACTIVE SIMULATIONS
      </h3>
      <div className="space-y-4">
        {activeSims.map(sim => (
          <div key={sim.id} className="p-3 bg-purple-900/10 border border-purple-500/20 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold text-purple-200">{sim.name}</p>
              <p className="text-[10px] text-purple-500 uppercase tracking-tighter">{sim.type}</p>
            </div>
            <span className="px-2 py-0.5 text-[8px] bg-purple-900 text-purple-300 rounded-md border border-purple-700">
              {sim.status.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimulationViewer;
