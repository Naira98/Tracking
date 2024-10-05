import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchShipment = ({
  height,
  width,
  searchSize,
}: {
  height: string;
  width: string;
  searchSize: number;
}) => {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const isDisabled = !trackingNumber;
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!isDisabled) {
      navigate(`/track-shipments/${trackingNumber}`);
    }
  };
  return (
    <form className="flex items-center justify-center">
      <input
        style={{ height: height, width: width }}
        className="border-slate-primary focus:ring-slate-primary rounded-s-md border-2 px-3 shadow-sm transition-all focus:outline-none focus:ring focus:ring-opacity-75 focus:ring-offset-0"
        type="text"
        placeholder={t("TRACK_FORM.TRACKING_NUMBER")}
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button
        onClick={handleClick}
        style={{ height: height, width: height }}
        className={`h-${height} w-${height} rounded-e-md ${isDisabled ? "bg-red-secondary cursor-not-allowed" : "bg-red-primary cursor-pointer shadow-sm"}`}
      >
        <CiSearch className="mx-auto text-white" size={searchSize} />
      </button>
    </form>
  );
};

export default SearchShipment;
