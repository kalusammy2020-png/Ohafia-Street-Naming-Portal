import { useState } from 'react';
import { AlertCircle, Filter, RefreshCw } from 'lucide-react';
import SearchHero from '../components/public/SearchHero';
import StreetCard from '../components/public/StreetCard';
import StreetDetailModal from '../components/public/StreetDetailModal';
import { useStreetFilters } from '../hooks/useStreetFilters';
import { FILTER_ALL, STATUS } from '../constants';

// Tab 1: what any citizen sees. Search and verify a street. No admin actions.
export default function PublicPage({ streets }) {
  const filters = useStreetFilters(streets);
  const [selectedStreet, setSelectedStreet] = useState(null);

  return (
    <div className="space-y-8">
      <SearchHero
        searchTerm={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        community={filters.community}
        onCommunityChange={filters.setCommunity}
      />

      {/* Results header with status filter */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Approved Registered Streets</h3>
          <p className="text-xs text-slate-500">
            Showing {filters.filteredStreets.length} verified record(s)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={filters.status}
            onChange={(e) => filters.setStatus(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <option value={FILTER_ALL}>All Statuses</option>
            <option value={STATUS.ACTIVE}>Active / Paid</option>
            <option value={STATUS.OVERDUE}>Overdue Renewal</option>
          </select>
        </div>
      </div>

      {/* Results */}
      {filters.filteredStreets.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="text-slate-800 font-bold">No Matching Street Found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            We couldn&apos;t find any street matching your query &quot;{filters.searchTerm}&quot;. Please
            check the spelling or search using the Serial UIN number.
          </p>
          <button
            onClick={filters.clearFilters}
            className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Clear Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filters.filteredStreets.map((street) => (
            <StreetCard key={street.id} street={street} onView={setSelectedStreet} />
          ))}
        </div>
      )}

      {selectedStreet && (
        <StreetDetailModal street={selectedStreet} onClose={() => setSelectedStreet(null)} />
      )}
    </div>
  );
}