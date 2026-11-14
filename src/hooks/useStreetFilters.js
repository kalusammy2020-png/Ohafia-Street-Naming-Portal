import { useState, useMemo } from 'react';
import { FILTER_ALL } from '../constants';

// Search + filter logic. Each page calls this on its own,
// so typing in the public search does not affect the admin table.
export function useStreetFilters(streets) {
  const [searchTerm, setSearchTerm] = useState('');
  const [community, setCommunity] = useState(FILTER_ALL);
  const [status, setStatus] = useState(FILTER_ALL);

  const filteredStreets = useMemo(() => {
    const query = searchTerm.toLowerCase();
    return streets.filter((s) => {
      const matchesSearch = [s.streetName, s.uin, s.beneficiaryName, s.receiptNo].some(
        (field) => field.toLowerCase().includes(query)
      );
      const matchesCommunity = community === FILTER_ALL || s.community === community;
      const matchesStatus = status === FILTER_ALL || s.status === status;
      return matchesSearch && matchesCommunity && matchesStatus;
    });
  }, [streets, searchTerm, community, status]);

  const clearFilters = () => {
    setSearchTerm('');
    setCommunity(FILTER_ALL);
    setStatus(FILTER_ALL);
  };

  return {
    filteredStreets,
    searchTerm, setSearchTerm,
    community, setCommunity,
    status, setStatus,
    clearFilters,
  };
}