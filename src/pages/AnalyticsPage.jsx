import { Building2, CheckCircle2, FileText, AlertCircle } from 'lucide-react';
import MetricCard from '../components/analytics/MetricCard';
import CommunityChart from '../components/analytics/CommunityChart';
import RevenueProjection from '../components/analytics/RevenueProjection';
import { formatNaira } from '../utils/format';

// Tab 3: totals, compliance rate and revenue.
export default function AnalyticsPage({ streets, metrics }) {
  const complianceRate = Math.round((metrics.activeCount / (metrics.totalCount || 1)) * 100);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Municipal Revenue &amp; Registry Analytics</h2>
        <p className="text-xs text-slate-500">
          Real-time overview of street approvals, fee collections, and annual renewal forecasts in
          Ohafia LGA.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard
          label="Total Registered"
          value={`${metrics.totalCount} Streets`}
          note="Fully cataloged in LGA database"
          Icon={Building2}
          tone="neutral"
          iconTone="emerald"
        />
        <MetricCard
          label="Active Compliance"
          value={`${metrics.activeCount} Active`}
          note={`${complianceRate}% compliance rate`}
          Icon={CheckCircle2}
          tone="emerald"
        />
        <MetricCard
          label="Total Revenue Collected"
          value={formatNaira(metrics.totalRevenue)}
          note="Initial registration & approvals"
          Icon={FileText}
          tone="neutral"
        />
        <MetricCard
          label="Overdue Renewals"
          value={`${metrics.overdueCount} Pending`}
          note={`${formatNaira(metrics.renewalRevenuePotential)} potential revenue`}
          Icon={AlertCircle}
          tone="amber"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommunityChart streets={streets} />
        <RevenueProjection />
      </div>
    </div>
  );
}





