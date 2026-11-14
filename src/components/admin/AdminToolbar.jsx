import { Search, PlusCircle } from 'lucide-react';
import { COMMUNITIES, FILTER_ALL, STATUS } from '../../constants';

const selectClass =
  'w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600';

// Title bar with the "Register" button, plus the search and filter row.
export default function AdminToolbar({
  searchTerm, onSearchChange,
  community, onCommunityChange,
  status, onStatusChange,
  onRegisterClick,
}) {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
            LGA Council Management
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">Master Street Naming Register</h2>
          <p className="text-xs text-slate-500">
            Manage approvals, toggle annual renewals, and generate official receipts.
          </p>
        </div>

        <button
          onClick={onRegisterClick}
          className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4 text-amber-400" />
          <span>Register New Street</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Filter table records..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <select value={community} onChange={(e) => onCommunityChange(e.target.value)} className={selectClass}>
          <option value={FILTER_ALL}>All Communities</option>
          {COMMUNITIES.map((c) => (
            <option key={c.code} value={c.name}>{c.name}</option>
          ))}
        </select>

        <select value={status} onChange={(e) => onStatusChange(e.target.value)} className={selectClass}>
          <option value={FILTER_ALL}>All Statuses</option>
          <option value={STATUS.ACTIVE}>Active Only</option>
          <option value={STATUS.OVERDUE}>Overdue Only</option>
        </select>
      </div>
    </>
  );
}