import { Hash, User, MapPin, Calendar, ChevronRight } from 'lucide-react';
import StatusBadge from '../common/StatusBadge';

export default function StreetCard({ street, onView }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* UIN and status */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
            <Hash className="w-3 h-3 text-emerald-600" />
            {street.uin}
          </span>
          <StatusBadge status={street.status} />
        </div>

        {/* Street name and beneficiary */}
        <div>
          <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {street.streetName}
          </h4>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Beneficiary: <strong className="text-slate-700">{street.beneficiaryName}</strong>
            </span>
          </div>
        </div>

        {/* Location and renewal */}
        <div className="bg-slate-50 p-3 rounded-xl space-y-2 text-xs">
          <div className="flex items-start gap-1.5 text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Location:</strong> {street.community} ({street.ward})
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>
              <strong>Renewal Due:</strong> {street.renewalDate}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-400">Official Municipal Record</span>
        <button
          onClick={() => onView(street)}
          className="text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all"
        >
          View Details <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}