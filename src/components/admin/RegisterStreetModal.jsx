import { useState } from 'react';
import { PlusCircle, CheckCircle2, X } from 'lucide-react';
import Modal from '../common/Modal';
import { COMMUNITIES, CATEGORIES, DEFAULT_APPROVAL_FEE } from '../../constants';

const EMPTY_FORM = {
  beneficiaryName: '',
  phone: '',
  streetName: '',
  community: COMMUNITIES[0].name,
  ward: '',
  description: '',
  category: CATEGORIES[0],
  amountPaid: String(DEFAULT_APPROVAL_FEE),
};

const inputClass =
  'w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600';

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-slate-700 font-bold mb-1">{label}</label>
      {children}
    </div>
  );
}

// The form lives inside this component, so it starts empty every time it opens.
export default function RegisterStreetModal({ onSubmit, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);

  // Returns a function that updates just one field of the form
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Modal onClose={onClose}>
      <div className="bg-emerald-900 text-white p-6 relative">
        <button
          onClick={onClose}
          aria-label="Close form"
          className="absolute right-4 top-4 text-emerald-200 hover:text-white bg-emerald-950/40 p-1.5 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-amber-400" /> Register New Street Approval
        </h3>
        <p className="text-xs text-emerald-200 mt-1">
          This will generate an official Unique Serial Number (UIN) and digital receipt.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
        <Field label="Applicant / Beneficiary Full Name *">
          <input type="text" required placeholder="e.g. Chief Kalu Agwu"
            value={form.beneficiaryName} onChange={update('beneficiaryName')} className={inputClass} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Phone Number *">
            <input type="tel" required placeholder="+234 803 000 0000"
              value={form.phone} onChange={update('phone')} className={inputClass} />
          </Field>
          <Field label="Category / Zone">
            <select value={form.category} onChange={update('category')} className={inputClass}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Proposed Street Name *">
          <input type="text" required placeholder="e.g. Chief Kalu Agwu Boulevard"
            value={form.streetName} onChange={update('streetName')} className={inputClass} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Community">
            <select value={form.community} onChange={update('community')} className={inputClass}>
              {COMMUNITIES.map((c) => <option key={c.code} value={c.name}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="Council Ward">
            <input type="text" placeholder="e.g. Ebem Ward 2"
              value={form.ward} onChange={update('ward')} className={inputClass} />
          </Field>
        </div>

        <Field label="Location & Landmark Description">
          <textarea rows="2" placeholder="Describe starting and ending landmarks..."
            value={form.description} onChange={update('description')} className={inputClass} />
        </Field>

        <Field label="Initial Approval Fee (₦)">
          <input type="number" min="0" value={form.amountPaid}
            onChange={update('amountPaid')} className={inputClass} />
        </Field>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button type="button" onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-800 px-4 py-2">
            Cancel
          </button>
          <button type="submit"
            className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" /> Save &amp; Issue UIN
          </button>
        </div>
      </form>
    </Modal>
  );
}