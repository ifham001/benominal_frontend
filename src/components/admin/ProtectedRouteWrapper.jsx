'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');

    if (!token) {
      router.push('/admin/auth');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <div>Checking Auth...</div>;

  return <>{children}</>;
}
