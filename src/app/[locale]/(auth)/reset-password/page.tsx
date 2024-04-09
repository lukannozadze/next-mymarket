
import { Suspense } from 'react'
import ResetPassword from './ResetPassword'
import { getTranslations } from 'next-intl/server';

export default async function page() {
  const t = await getTranslations("ResetPassword");
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ResetPassword
       logoPath={t("logoPath")}
       title = {t("title")}
       password = {t("password")}
       repeat = {t("repeat")}
       done={t("done")}
      />
    </Suspense>
  )
}
