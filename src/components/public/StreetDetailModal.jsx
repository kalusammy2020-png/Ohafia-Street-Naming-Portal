import { X } from 'lucide-react';
import Modal from '../common/Modal';
import { formatNaira } from '../../utils/format';
import { STATUS } from '../../constants';

// Public view of a record. Contact phone is intentionally NOT shown here.
export default function StreetDetailModal({ street, onClose }) {
  return (
    <Modal onClose={onClose}>
      <div className="bg-emerald-900 text-white p-6 relative">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-4 top-4 text-emerald-200 hover:text-white bg-emerald-950/40 p-1.5 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
        <span className="text-[10px] font-bold bg-amber-400 text-emerald-950 px-2.5 py-0.5 rounded uppercase tracking-wider">
          Official Municipal Record
        </span>
        <h3 className="text-xl font-extrabold mt-2 text-white">{street.streetName}</h3>
        <p className="text-xs text-emerald-200 font-mono mt-0.5">UIN: {street.uin}</p>
      </div>

      <div className="p-6 space-y-4 text-xs">
        <div className="bg-slate-50 p-3 rounded-xl">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">Beneficiary Name</span>
          <strong className="text-slate-800 text-sm block mt-0.5">{street.beneficiaryName}</strong>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl space-y-1">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">Community &amp; Ward</span>
          <p className="text-slate-800 font-semibold">
            {street.community} ({street.ward})
          </p>
          <p className="text-slate-500 text-[11px] leading-relaxed pt-1 border-t border-slate-200/60 mt-1">
            <strong>Landmark Description:</strong> {street.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Digital Receipt No.</span>
            <span className="font-mono text-slate-800 font-semibold">{street.receiptNo}</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Approval Fee</span>
            <span className="font-semibold text-slate-800">{formatNaira(street.amountPaid)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
          <div>
            <span className="text-slate-400 text-[10px] uppercase font-bold block">Renewal Status</span>
            <span className="text-slate-700 font-medium">Due Date: {street.renewalDate}</span>
          </div>
          <span
            className={`px-3 py-1 rounded-full font-bold text-xs ${
              street.status === STATUS.ACTIVE
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {street.status}
          </span>
        </div>
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
        <button onClick={onClose} className="text-xs font-semibold text-slate-600 hover:text-slate-800 px-4 py-2">
          Close
        </button>
      </div>
    </Modal>
  );
}