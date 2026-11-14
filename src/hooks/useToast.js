import { useState, useEffect } from 'react';

// Shows a message for a few seconds, then clears it.
export function useToast(duration = 4000) {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), duration);
    return () => clearTimeout(timer); // avoids updating state after unmount
  }, [toast, duration]);

  return { toast, showToast: setToast };
}