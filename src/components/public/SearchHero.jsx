import { Search, Shield, QrCode, X } from 'lucide-react';
import { COMMUNITIES, FILTER_ALL } from '../../constants';

const QUICK_FILTERS = [FILTER_ALL, ...COMMUNITIES.map((c) => c.name)];

export default function SearchHero({ searchTerm, onSearchChange, community, onCommunityChange }) {
  return (
    <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
        <QrCode className="w-80 h-80" />
      </div>

      <div className="max-w-2xl relative z-10 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-800/80 text-amber-300 border border-emerald-600">
          <Shield className="w-3.5 h-3.5" />
          Official Municipal Verification
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Verify Approved Street Names &amp; Unique Serial Numbers
        </h2>
        <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
          Enter a Unique Serial Number (UIN), Street Name, Beneficiary Name, or Digital Receipt
          Number to verify municipal approval across Ohafia LGA.
        </p>

        {/* Search input */}
        <div className="pt-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search e.g. OH-EBM-2026-001 or Chief Agwu..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-sm font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-400/50 transition-all placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quick community filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-emerald-200/80 font-medium">Quick Filter:</span>
          {QUICK_FILTERS.map((name) => (
            <button
              key={name}
              onClick={() => onCommunityChange(name)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                community === name
                  ? 'bg-amber-400 text-emerald-950'
                  : 'bg-emerald-800/60 text-emerald-100 hover:bg-emerald-700'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}