import { Shield, Search, Building2, BarChart3 } from 'lucide-react';
import { TABS } from '../../constants';

const NAV_ITEMS = [
  { id: TABS.PUBLIC, label: 'Public Verification', Icon: Search },
  { id: TABS.ADMIN, label: 'LGA Admin Portal', Icon: Building2 },
  { id: TABS.ANALYTICS, label: 'Analytics & Revenue', Icon: BarChart3 },
];

export default function Header({ activeTab, onTabChange }) {
  return (
    
    <header className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-xl border-b-4 border-amber-400 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Branding */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border-2 border-amber-400 flex items-center justify-center shadow-inner flex-shrink-0">
              <Shield className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-emerald-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider">
                  Official LGA Registry
                </span>
                <span className="text-emerald-200 text-xs hidden sm:inline">Abia State, Nigeria</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ohafia LGA Street Naming Portal
              </h1>
            </div>
          </div>

          {/* Navigation tabs */}
          <nav className="flex items-center bg-emerald-950/60 p-1.5 rounded-xl border border-emerald-700/50 self-start md:self-auto">
            {NAV_ITEMS.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === id
                    ? 'bg-amber-400 text-emerald-950 shadow-md'
                    : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}