import React, { useState } from 'react';
import { Check, X, Info } from 'lucide-react';

const KnowledgeReview = () => {
  const [pendingNodes, setPendingNodes] = useState([
    { id: 'kn-001', topic: 'Quantum Synapses', confidence: 0.92, summary: 'Hypothesis that quantum fluctuations influence synaptic weighting.' },
    { id: 'kn-002', topic: 'Bio-Synthetic Ethics', confidence: 0.84, summary: 'Proposed framework for ethical alignment in hybrid neural systems.' }
  ]);

  const resolve = (id: string, approved: boolean) => {
    setPendingNodes(pendingNodes.filter(n => n.id !== id));
    console.log(`Node ${id} ${approved ? 'Approved' : 'Rejected'}`);
  };

  return (
    <div className="p-6 bg-[#080808] border border-gray-800 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest italic">Synaptic Knowledge Review</h3>
        <span className="px-2 py-0.5 bg-amber-900/30 text-amber-500 border border-amber-500/20 rounded text-[8px] font-bold">
          {pendingNodes.length} PENDING
        </span>
      </div>

      <div className="space-y-4">
        {pendingNodes.map(node => (
          <div key={node.id} className="p-4 bg-black border border-gray-900 rounded-xl group hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xs font-bold text-cyan-400">{node.topic}</h4>
              <span className="text-[8px] text-gray-600 font-mono">CONF: {node.confidence * 100}%</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed mb-4 italic">"{node.summary}"</p>

            <div className="flex gap-2">
              <button
                onClick={() => resolve(node.id, true)}
                className="flex-1 py-1.5 bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-[9px] font-black uppercase hover:bg-emerald-500 hover:text-black transition-all flex items-center justify-center gap-1"
              >
                <Check size={12} /> Approve
              </button>
              <button
                onClick={() => resolve(node.id, false)}
                className="flex-1 py-1.5 bg-red-900/20 text-red-400 border border-red-500/30 rounded-lg text-[9px] font-black uppercase hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-1"
              >
                <X size={12} /> Reject
              </button>
            </div>
          </div>
        ))}

        {pendingNodes.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-[10px] text-gray-700 font-mono italic">KNOWLEDGE UNIVERSE COHERENT // NO PENDING SYNAPSES</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeReview;
