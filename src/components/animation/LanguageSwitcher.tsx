'use client';

import { usePathname, useRouter } from 'next/navigation';

const locales = ['en', 'id'];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang: string) => {
    const segments = pathname.split('/');

    // deteksi jika segment[1] adalah locale (en / id)
    const isLocalized = locales.includes(segments[1]);

    if (isLocalized) {
      segments[1] = lang;
    } else {
      segments.splice(1, 0, lang); // tambahkan locale di posisi ke-1
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div style={{ marginBottom: '1rem', display: 'flex', gap: '8px' }}>
      <button onClick={() => switchLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => switchLanguage('id')}>🇮🇩 Bahasa</button>
    </div>
  );
}
