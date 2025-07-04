'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return <>{children}</>;
}
