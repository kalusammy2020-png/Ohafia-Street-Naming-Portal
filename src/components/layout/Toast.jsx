import { Sparkles } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      role="status"
      className="toast-enter fixed top-4 right-4 z-[60] bg-emerald-700 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3"
    >
      <Sparkles className="w-5 h-5 text-amber-300" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}