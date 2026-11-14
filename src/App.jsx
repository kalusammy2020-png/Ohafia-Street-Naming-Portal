import { useState } from 'react';
import { TABS } from './constants';
import { useStreets } from './hooks/useStreets';
import { useToast } from './hooks/useToast';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Toast from './components/layout/Toast';
import PublicPage from './pages/PublicPage';
import AdminPage from './pages/AdminPage';
import AnalyticsPage from './pages/AnalyticsPage';

// App only decides WHICH page to show. The work happens in hooks, pages and components.
export default function App() {
  const [activeTab, setActiveTab] = useState(TABS.PUBLIC);
  const { streets, metrics, addStreet, toggleStatus } = useStreets();
  const { toast, showToast } = useToast();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === TABS.PUBLIC && <PublicPage streets={streets} />}
        {activeTab === TABS.ADMIN && (
          <AdminPage
            streets={streets}
            addStreet={addStreet}
            toggleStatus={toggleStatus}
            onToast={showToast}
          />
        )}
        {activeTab === TABS.ANALYTICS && <AnalyticsPage streets={streets} metrics={metrics} />}
      </main>

      <Footer />
      <Toast message={toast} />
    </div>
  );
}