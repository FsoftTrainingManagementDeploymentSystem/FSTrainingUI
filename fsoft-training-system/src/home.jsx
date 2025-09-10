import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./app/components/LanguageSwitcher/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation("home");
  return (
    <div className="p-6 space-y-4">
      <LanguageSwitcher />
      <h1 className="text-2xl font-bold">{t("title1")}</h1>
    </div>
  );
}
