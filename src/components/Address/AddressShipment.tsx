import { useTranslation } from "react-i18next";

const AddressShipment = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <h1>{t("ADDRESS.TITLE")}</h1>
      <div className="bg-gray-secondary border-slate-primary rounded-md border-2">
        <h1 className="p-5">{t("ADDRESS.ADDRESS_EXAMPLE")}</h1>
      </div>
    </div>
  );
};

export default AddressShipment;
