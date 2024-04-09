import { getTranslations } from 'next-intl/server';
import RequestPassword from './RequestPassword'

export default async function page() {
  const t = await getTranslations("RequestPassword");
  return (
    <RequestPassword 
    logoPath={t('logoPath')}
    title={t('title')}
    email={t('email')}
    done={t('done')}
    notification={t('notification')}
    />
  )
}
