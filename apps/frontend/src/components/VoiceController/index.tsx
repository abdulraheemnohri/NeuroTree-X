import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceController = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsListening(!isListening)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
          isListening ? 'bg-cyan-500 text-black animate-pulse' : 'bg-gray-900 text-cyan-500 border border-cyan-500/30'
        }`}
      >
        {isListening ? <Mic size={24} /> : <MicOff size={24} />}
      </button>
      {isListening && (
        <div className="absolute bottom-20 right-0 bg-black/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-2xl w-64 text-[10px] font-mono text-cyan-400">
          <p className="animate-pulse">>>> LISTENING FOR SYNAPTIC COMMANDS...</p>
          <p className="mt-2 text-gray-500 italic">"Expand AI Research branch"</p>
        </div>
      )}
    </div>
  );
};

export default VoiceController;
