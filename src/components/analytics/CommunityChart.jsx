import { useMemo } from 'react';
import { COMMUNITIES } from '../../constants';

// Horizontal bars showing how many streets each community has.
// Counts come from the real records, so they update when you register a street.
export default function CommunityChart({ streets }) {
  const stats = useMemo(
    () =>
      COMMUNITIES.map((c) => ({
        name: c.name,
        count: streets.filter((s) => s.community === c.name).length,
      })),
    [streets]
  );

  const total = streets.length || 1; // avoids dividing by zero

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
        Street Allocation by Community
      </h3>
      <div className="space-y-3">
        {stats.map(({ name, count }) => (
          <div key={name} className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-700">{name}</span>
              <span className="text-slate-500">{count} Street(s)</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-700 rounded-full"
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}