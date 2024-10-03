import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const TrackForm = () => {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const isDisabled = trackingNumber.length < 6;
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!isDisabled) {
      navigate(`/track-shipments/${trackingNumber}`);
    }
  };

  return (
    <div className="flex w-fit flex-col justify-center gap-4 rounded-md border-2 border-slate px-7 py-5 shadow-md">
      <h1 className="">{t("trackShipment")}</h1>
      <div className="flex items-center justify-center">
        <input
          className="h-9 rounded-s-md border-2 border-slate px-1 transition-all focus:outline-none focus:ring focus:ring-slate focus:ring-opacity-75 focus:ring-offset-0"
          type="text"
          placeholder={t("trackingNumber")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className={`rounded-e-md ${isDisabled ? "bg-red-secondary cursor-not-allowed" : "bg-red-primary cursor-pointer"}`}
        >
          <CiSearch className="size-8 h-9 p-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TrackForm;
