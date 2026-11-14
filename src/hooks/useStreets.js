import { useState, useMemo } from 'react';
import { INITIAL_STREETS } from '../data/street';
import { STATUS, RENEWAL_FEE } from '../constants';
import { generateUIN, generateReceiptNo, getRegistrationDates } from '../utils/generators';

// The single source of truth for street records.
export function useStreets() {
  const [streets, setStreets] = useState(INITIAL_STREETS);

  const metrics = useMemo(() => {
    const overdueCount = streets.filter((s) => s.status === STATUS.OVERDUE).length;
    return {
      totalCount: streets.length,
      activeCount: streets.length - overdueCount,
      overdueCount,
      totalRevenue: streets.reduce((sum, s) => sum + Number(s.amountPaid), 0),
      renewalRevenuePotential: overdueCount * RENEWAL_FEE,
    };
  }, [streets]);

  // Creates a full record from the form data and returns it.
  const addStreet = (formData) => {
    const record = {
      ...formData,
      id: String(Date.now()),
      uin: generateUIN(formData.community, streets),
      receiptNo: generateReceiptNo(),
      amountPaid: Number(formData.amountPaid),
      status: STATUS.ACTIVE,
      description:
        formData.description || 'Official street registered under municipal ordinance.',
      ...getRegistrationDates(),
    };
    setStreets((prev) => [record, ...prev]);
    return record;
  };

  const toggleStatus = (id) => {
    setStreets((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === STATUS.ACTIVE ? STATUS.OVERDUE : STATUS.ACTIVE }
          : s
      )
    );
  };

  return { streets, metrics, addStreet, toggleStatus };
}