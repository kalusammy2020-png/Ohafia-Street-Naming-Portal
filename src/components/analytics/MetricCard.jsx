// One summary box: label, icon, big value and a small note.
// `tone` picks the colour: "emerald", "amber" or "neutral".
const TONES = {
  emerald: { icon: 'bg-emerald-50 text-emerald-700', value: 'text-emerald-700', note: 'text-emerald-600' },
  amber: { icon: 'bg-amber-50 text-amber-700', value: 'text-amber-700', note: 'text-amber-600' },
  neutral: { icon: 'bg-amber-50 text-amber-700', value: 'text-slate-900', note: 'text-slate-500' },
};

export default function MetricCard({ label, value, note, Icon, tone = 'neutral', iconTone = tone }) {
  const colors = TONES[tone];
  const iconColors = TONES[iconTone];

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
      <div className="flex items-center justify-between text-slate-500">
        <span className="text-xs font-semibold uppercase">{label}</span>
        <div className={`p-2 rounded-xl ${iconColors.icon}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className={`text-2xl font-extrabold ${colors.value}`}>{value}</div>
      <p className={`text-[11px] font-medium ${colors.note}`}>{note}</p>
    </div>
  );
}