import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";
import { getTranslations } from "next-intl/server";

export default async function page() {
  const t = await getTranslations("Authorization");

  const { data } = await readUserSession();
  if (data.session) {
    redirect("/");
  }
 
  return (
    <div className="flex justify-center">
      <LoginForm
        logoPath={t('logoPath')}
        title={t("title")}
        email={t("email")}
        password={t("password")}
        recover={t("recover")}
        login={t("login")}
        redirectQuestion={t("redirectQuestion")}
        redirectAction={t("redirectAction")}
      />
    </div>
  );
}
