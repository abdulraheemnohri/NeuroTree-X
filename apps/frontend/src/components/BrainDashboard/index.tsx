import React from 'react';

const BrainDashboard = () => {
  const metrics = {
    memorySize: "8.4 TB",
    knowledgeNodes: "1.2M",
    learningProgress: "98.4%",
    activeAgents: 12
  };

  return (
    <div className="p-6 bg-gray-900 text-cyan-400 border border-cyan-500 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">AI Brain Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black p-4 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 uppercase">Memory Size</p>
          <p className="text-xl font-mono">{metrics.memorySize}</p>
        </div>
        <div className="bg-black p-4 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 uppercase">Nodes</p>
          <p className="text-xl font-mono">{metrics.knowledgeNodes}</p>
        </div>
        <div className="bg-black p-4 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 uppercase">Learning</p>
          <p className="text-xl font-mono">{metrics.learningProgress}</p>
        </div>
        <div className="bg-black p-4 rounded-lg border border-gray-700">
          <p className="text-xs text-gray-400 uppercase">Agents</p>
          <p className="text-xl font-mono">{metrics.activeAgents}</p>
        </div>
      </div>
    </div>
  );
};

export default BrainDashboard;
