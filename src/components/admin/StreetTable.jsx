import { Printer } from 'lucide-react';
import { STATUS } from '../../constants';

const COLUMNS = [
  'Serial Number (UIN)',
  'Street Name',
  'Beneficiary & Phone',
  'Community / Ward',
  'Receipt No.',
  'Renewal Date',
  'Status',
  'Actions',
];

export default function StreetTable({ streets, onToggleStatus, onViewReceipt }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-bold text-[10px] tracking-wider">
            <tr>
              {COLUMNS.map((label) => (
                <th key={label} className={`py-3.5 px-4 ${label === 'Actions' ? 'text-right' : ''}`}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {streets.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="py-8 text-center text-slate-400">
                  No database entries match your search criteria.
                </td>
              </tr>
            ) : (
              streets.map((street) => (
                <tr key={street.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-800">{street.uin}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{street.streetName}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-800">{street.beneficiaryName}</div>
                    <div className="text-[11px] text-slate-400">{street.phone}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-slate-700">{street.community}</span>
                    <div className="text-[10px] text-slate-400">{street.ward}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{street.receiptNo}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-600">{street.renewalDate}</td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => onToggleStatus(street.id)}
                      title="Click to toggle status"
                      className={`px-2.5 py-1 rounded-full font-bold text-[10px] uppercase flex items-center gap-1 border transition-all ${
                        street.status === STATUS.ACTIVE
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200'
                          : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'
                      }`}
                    >
                      {street.status}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onViewReceipt(street)}
                      className="text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 text-[11px] font-bold inline-flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5" /> Receipt
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}