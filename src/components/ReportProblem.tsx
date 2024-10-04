import { useTranslation } from "react-i18next";

const ReportProblem = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-3 flex gap-3 rounded-md border-2 border-slate p-5">
      <img src="/questions.png" alt="question" className="w-28" />
      <div className="flex flex-col items-center justify-center gap-5">
        <h1>{t("PROBLEM.TITLE")}</h1>
        <button className="bg-red-primary hover:bg-red-secondary active:bg-red-tertiary rounded-md px-6 py-2 text-white">
          {t("PROBLEM.REPORT")}
        </button>
      </div>
    </div>
  );
};

export default ReportProblem;
