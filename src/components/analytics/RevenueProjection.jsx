// Static projection panel shown beside the community chart.
// The figures are estimates for the presentation, not calculated from records.
export default function RevenueProjection() {
  return (
    <div className="bg-gradient-to-br from-emerald-950 to-teal-900 text-white p-6 rounded-2xl shadow-md space-y-4 flex flex-col justify-between">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-400 text-emerald-950 text-[10px] font-bold uppercase">
          Financial Impact Summary
        </div>
        <h3 className="text-lg font-bold">Ohafia LGA Revenue Growth Projection</h3>
        <p className="text-xs text-emerald-100/80 leading-relaxed">
          By converting all manual physical records into this centralized digital database, Ohafia
          LGA will eliminate unpaid renewals and streamline new applications.
        </p>
      </div>

      <div className="bg-emerald-900/60 border border-emerald-700/60 p-4 rounded-xl space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-emerald-200">Estimated 100 Streets Renewal:</span>
          <strong className="text-amber-300">₦1,500,000 / year</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-emerald-200">Estimated 30 New Registrations:</span>
          <strong className="text-amber-300">₦1,500,000 / year</strong>
        </div>
        <div className="pt-2 border-t border-emerald-700/80 flex justify-between font-bold text-sm">
          <span>Projected Annual IGR:</span>
          <span className="text-white">₦3,000,000+</span>
        </div>
      </div>

      <p className="text-[10px] text-emerald-300/60 text-center">
        Engineered by Techrise 3.0 Participants for Ohafia Local Government Area Council.
      </p>
    </div>
  );
}