'use client';

import { useTranslation } from 'next-i18next';
import Hero from 'src/components/layout/Hero'; // Komponen yang pakai t()

export default function Client() {
  const { t } = useTranslation('common');

  return (
    <>
      <h1>{t('greeting')} Wulan Lailatul Mufidah</h1>
      <Hero />
    </>
  );
}
