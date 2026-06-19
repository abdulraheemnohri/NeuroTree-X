import React from 'react';
import Settings from '../components/Settings';
import Link from 'next/link';

export default function SettingsPage() {
  return (
    <div className="bg-[#050505] min-h-screen">
      <nav className="p-6 border-b border-gray-900 flex justify-between items-center">
         <Link href="/" className="text-xs font-black text-gray-500 hover:text-white transition-all uppercase tracking-widest">
            ← Back to Knowledge Universe
         </Link>
         <div className="flex gap-4">
            <div className="px-3 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-[8px] text-cyan-400 font-mono uppercase">
               Settings: SECURE
            </div>
         </div>
      </nav>
      <Settings />
    </div>
  );
}
