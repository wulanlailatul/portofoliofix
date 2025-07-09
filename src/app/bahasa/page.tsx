'use client';

import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <main>
      <h1>{t('greeting')}</h1>
    </main>
  );
}
