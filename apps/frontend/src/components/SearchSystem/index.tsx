import React, { useState } from 'react';
import { Search, Mic, Command } from 'lucide-react';

const SearchSystem = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full max-w-2xl mx-auto relative group">
      <div className="absolute inset-0 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>
      <div className="relative flex items-center bg-[#0a0a0a] border border-gray-800 rounded-2xl px-6 py-4 shadow-2xl focus-within:border-cyan-500/50 transition-all">
         <Search size={18} className="text-gray-500 mr-4" />
         <input
           type="text"
           value={query}
           onChange={(e) => setQuery(e.target.value)}
           placeholder="Search the Knowledge Universe (Keyword or Semantic)..."
           className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder:text-gray-600 font-medium"
         />
         <div className="flex items-center gap-4 ml-4">
            <Mic size={16} className="text-gray-500 hover:text-cyan-400 cursor-pointer transition-all" />
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-900 border border-gray-800 rounded-lg">
               <Command size={10} className="text-gray-500" />
               <span className="text-[10px] text-gray-500 font-bold">K</span>
            </div>
         </div>
      </div>

      {query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#080808] border border-gray-800 rounded-2xl p-4 z-50 shadow-2xl animate-in fade-in slide-in-from-top-4">
           <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest">Semantic Results</p>
           <div className="space-y-2">
              <div className="p-3 bg-black border border-gray-900 rounded-xl hover:border-cyan-500/30 cursor-pointer transition-all">
                 <p className="text-xs text-cyan-400 font-bold">{query} Optimization Path</p>
                 <p className="text-[10px] text-gray-600 mt-1 italic">Core Synapse correlation detected at depth 4.</p>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default SearchSystem;
