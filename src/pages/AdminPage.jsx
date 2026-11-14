import { useState } from 'react';
import AdminToolbar from '../components/admin/AdminToolbar';
import StreetTable from '../components/admin/StreetTable';
import RegisterStreetModal from '../components/admin/RegisterStreetModal';
import ReceiptModal from '../components/admin/ReceiptModal';
import { useStreetFilters } from '../hooks/useStreetFilters';

// Tab 2: council staff. Register streets, change status, print receipts.
export default function AdminPage({ streets, addStreet, toggleStatus, onToast }) {
  const filters = useStreetFilters(streets);
  const [showRegister, setShowRegister] = useState(false);
  const [receiptStreet, setReceiptStreet] = useState(null);

  const handleRegister = (formData) => {
    const record = addStreet(formData);
    setShowRegister(false);
    onToast(`Street "${record.streetName}" registered with UIN: ${record.uin}`);
  };

  const handleToggle = (id) => {
    toggleStatus(id);
    onToast('Street status updated.');
  };

  return (
    <div className="space-y-6">
      <AdminToolbar
        searchTerm={filters.searchTerm}
        onSearchChange={filters.setSearchTerm}
        community={filters.community}
        onCommunityChange={filters.setCommunity}
        status={filters.status}
        onStatusChange={filters.setStatus}
        onRegisterClick={() => setShowRegister(true)}
      />

      <StreetTable
        streets={filters.filteredStreets}
        onToggleStatus={handleToggle}
        onViewReceipt={setReceiptStreet}
      />

      {showRegister && (
        <RegisterStreetModal onSubmit={handleRegister} onClose={() => setShowRegister(false)} />
      )}
      {receiptStreet && (
        <ReceiptModal street={receiptStreet} onClose={() => setReceiptStreet(null)} />
      )}
    </div>
  );
}