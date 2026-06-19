import React, { useState, useEffect } from 'react';

const CyberTreeExplorer = () => {
  const [nodes, setNodes] = useState([
    { id: 1, name: 'Root', type: 'core' },
    { id: 2, name: 'Transformer AI', type: 'technology' },
  ]);

  useEffect(() => {
    // Simulate fetching dynamic updates from the research engine
    const interval = setInterval(() => {
      console.log("Fetching intelligence updates...");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-black rounded-3xl overflow-hidden border border-blue-900 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="relative z-10 p-8">
        <h2 className="text-3xl font-bold text-white mb-2">Cyber Tree Explorer</h2>
        <p className="text-blue-400 font-mono text-sm mb-8">LIVE NEURAL PATHWAY MAPPING...</p>
        <div className="flex flex-wrap gap-4">
          {nodes.map(node => (
            <div key={node.id} className="p-4 bg-gray-800/50 backdrop-blur-md border border-blue-500/30 rounded-xl text-blue-200">
              {node.name} <span className="text-xs text-blue-500 uppercase ml-2">[{node.type}]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberTreeExplorer;
