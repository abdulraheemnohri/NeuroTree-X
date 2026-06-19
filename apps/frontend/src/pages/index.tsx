import React from 'react';
import CyberTreeExplorer from '../components/CyberTreeExplorer';
import NodeDetailPanel from '../components/NodeDetailPanel';
import NeuroViz from '../components/NeuroViz';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">NeuroTree X</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CyberTreeExplorer />
          <NeuroViz />
        </div>
        <div>
          <NodeDetailPanel />
        </div>
      </div>
    </div>
  );
}
