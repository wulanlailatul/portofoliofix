import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('greeting')} Wulan Lailatul Mufidah</h1>
      <p>{t('description')} <b>Next.js</b></p>
    </div>
  );
}

// SSR
export async function getStaticProps(context: GetStaticPropsContext) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
}
