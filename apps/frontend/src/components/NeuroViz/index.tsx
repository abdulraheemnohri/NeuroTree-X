import React, { useEffect, useState } from 'react';

const NeuroViz = () => {
  const [activity, setActivity] = useState<any>(null);

  useEffect(() => {
    // Simulate WebSocket connection for neural firing data
    const mockActivityInterval = setInterval(() => {
      setActivity({
        active_nodes: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
        intensity: Math.random().toFixed(2)
      });
    }, 2000);

    return () => clearInterval(mockActivityInterval);
  }, []);

  return (
    <div className="relative w-full h-64 bg-[#0a0a0a] rounded-3xl overflow-hidden border border-emerald-900/50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="z-10 text-center">
        <h3 className="text-emerald-400 font-bold tracking-widest text-xs mb-4">NEURO-VIGILANCE FEED</h3>
        {activity ? (
          <div className="space-y-2">
            <div className="flex gap-2 justify-center">
              {activity.active_nodes.map((node: number, i: number) => (
                <div key={i} className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-[10px] text-emerald-300 animate-pulse">
                  {node}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-emerald-600 font-mono">ACTIVITY INTENSITY: {activity.intensity}</p>
          </div>
        ) : (
          <p className="text-emerald-800 text-xs animate-pulse">CONNECTING TO SYNAPTIC CORE...</p>
        )}
      </div>
      {/* Background glowing effects */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute top-0 right-1/4 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
    </div>
  );
};

export default NeuroViz;
