import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import RegisterForm from "./RegisterForm";

export default async function page() {
  const t = await getTranslations("Registration");
  const { data } = await readUserSession();
  if (data.session) {
    redirect("/");
  }
  return (
    <>
    <div className="flex justify-center">
      <RegisterForm
      logoPath={t('logoPath')}
      title={t("title")}
      email={t("email")}
      password={t("password")}
      repeat={t('repeat')}
      gender={t('gender')}
      male={t('male')}
      female={t('female')}
      name={t('name')}
      lastname={t('lastname')}
      telephone={t('telephone')}
      termsStart={t('termsStart')}
      termsEnd={t('termsEnd')}
      policyStart={t('policyStart')}
      policyEnd={t('policyEnd')}
      confirm={t("confirm")}
      redirectQuestion={t("redirectQuestion")}
      redirectAction={t("redirectAction")}
      confirmEmailText={t("confirmEmailText")}
      />
    </div>
    </>
  );
}
