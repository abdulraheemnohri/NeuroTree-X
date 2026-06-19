import React, { useState } from 'react';
import { Box } from 'lucide-react';

const HologramMode = () => {
  const [arActive, setArActive] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setArActive(!arActive)}
        className={`w-full py-3 rounded-xl border flex items-center justify-center gap-3 transition-all ${
          arActive ? 'bg-amber-500 text-black border-amber-500' : 'bg-transparent text-amber-500 border-amber-500/30 hover:bg-amber-500/10'
        }`}
      >
        <Box size={16} />
        <span className="text-[10px] font-black uppercase tracking-widest">
          {arActive ? 'Hologram Active' : 'Enter Hologram Mode'}
        </span>
      </button>
    </div>
  );
};

export default HologramMode;
