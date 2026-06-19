import React, { useState } from 'react';
import { Image, FileText, Upload, BrainCircuit } from 'lucide-react';

const MultiModalInput = () => {
  const [analyzing, setAnalyzing] = useState(false);

  const simulateAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => setAnalyzing(false), 2000);
  };

  return (
    <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-2xl">
      <div className="flex gap-2 mb-4">
        <button className="flex-1 py-3 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-cyan-500/50 transition-all text-gray-500 hover:text-cyan-400">
          <Image size={18} />
          <span className="text-[8px] font-black uppercase">Visual</span>
        </button>
        <button className="flex-1 py-3 bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-purple-500/50 transition-all text-gray-500 hover:text-purple-400">
          <FileText size={18} />
          <span className="text-[8px] font-black uppercase">Document</span>
        </button>
      </div>

      <div className="relative group cursor-pointer" onClick={simulateAnalysis}>
        <div className={`w-full py-8 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all ${
          analyzing ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-800 hover:border-gray-700 bg-black/50'
        }`}>
          {analyzing ? (
            <>
              <BrainCircuit className="text-cyan-500 animate-spin mb-2" />
              <p className="text-[10px] text-cyan-400 font-mono animate-pulse uppercase tracking-widest">Analysing Synaptic Input...</p>
            </>
          ) : (
            <>
              <Upload className="text-gray-600 mb-2 group-hover:text-cyan-500 transition-all" />
              <p className="text-[10px] text-gray-500 font-bold uppercase">Drop Media for Neural Indexing</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiModalInput;
