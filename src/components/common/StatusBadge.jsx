import { CheckCircle2, AlertCircle } from 'lucide-react';
import { STATUS } from '../../constants';

// Green "Active" or amber "Overdue" pill. Used on cards and in modals.
export default function StatusBadge({ status }) {
  const isActive = status === STATUS.ACTIVE;

  return (
    <span
      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
        isActive
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          : 'bg-amber-100 text-amber-800 border border-amber-200'
      }`}
    >
      {isActive ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
      {status}
    </span>
  );
}