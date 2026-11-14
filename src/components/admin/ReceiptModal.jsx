import { Printer, QrCode } from 'lucide-react';
import Modal from '../common/Modal';
import { formatNaira } from '../../utils/format';

// One label/value line on the receipt
function Row({ label, children }) {
  return (
    <div className="flex justify-between py-1 border-b border-slate-100">
      <span className="text-slate-500">{label}</span>
      {children}
    </div>
  );
}

// The block with id="printable-receipt" is the only thing printed (see index.css).
export default function ReceiptModal({ street, onClose }) {
  return (
    <Modal onClose={onClose} widthClass="max-w-md" roundedClass="rounded-2xl">
      <div className="p-6 space-y-5 bg-white text-slate-900 font-sans" id="printable-receipt">
        <div className="text-center border-b-2 border-emerald-900 pb-4 space-y-1">
          <div className="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center mx-auto font-bold text-lg mb-1">
            OH
          </div>
          <h4 className="font-extrabold text-sm uppercase text-emerald-950 tracking-wider">
            Ohafia Local Government Area Council
          </h4>
          <p className="text-[10px] text-slate-500 uppercase font-semibold">
            Abia State, Federal Republic of Nigeria
          </p>
          <p className="text-[11px] font-bold text-amber-700 bg-amber-50 py-0.5 rounded mt-1 border border-amber-200">
            OFFICIAL MUNICIPAL STREET NAMING RECEIPT
          </p>
        </div>

        <div className="flex justify-between text-[11px] border-b border-slate-200 pb-3 font-mono">
          <div>
            <span className="text-slate-400 block text-[9px]">RECEIPT NO:</span>
            <strong className="text-slate-800">{street.receiptNo}</strong>
          </div>
          <div className="text-right">
            <span className="text-slate-400 block text-[9px]">SERIAL UIN:</span>
            <strong className="text-emerald-800">{street.uin}</strong>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          <Row label="Payer Name:"><strong className="text-slate-900">{street.beneficiaryName}</strong></Row>
          <Row label="Phone Number:"><span className="text-slate-800">{street.phone}</span></Row>
          <Row label="Approved Street:"><strong className="text-emerald-900">{street.streetName}</strong></Row>
          <Row label="Community/Ward:">
            <span className="text-slate-800">{street.community} ({street.ward})</span>
          </Row>
          <Row label="Registration Date:"><span className="text-slate-800">{street.registrationDate}</span></Row>
          <Row label="Next Renewal Date:"><span className="text-slate-800">{street.renewalDate}</span></Row>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Total Amount Paid</span>
            <span className="text-[10px] text-emerald-700 font-semibold">Payment Status: VERIFIED</span>
          </div>
          <span className="text-lg font-extrabold text-slate-900">{formatNaira(street.amountPaid)}.00</span>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-[10px] text-slate-500">
          <div className="space-y-0.5">
            <p className="font-bold text-slate-700">Digital Validation Code</p>
            <p>Scan code with mobile app to verify authenticity.</p>
          </div>
          <div className="w-12 h-12 bg-slate-900 text-white p-1 rounded flex items-center justify-center flex-shrink-0">
            <QrCode className="w-10 h-10 text-amber-400" />
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
        <button onClick={onClose} className="text-xs font-semibold text-slate-600 hover:text-slate-900">
          Close
        </button>
        <button
          onClick={() => window.print()}
          className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
        >
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>
    </Modal>
  );
}