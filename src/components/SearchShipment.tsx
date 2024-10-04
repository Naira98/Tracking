import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchShipment = ({
  height,
  width,
}: {
  height: number;
  width: number;
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
        className={`h-${height} w-${width} rounded-s-md border-2 border-slate-primary px-1 shadow-md transition-all focus:outline-none focus:ring focus:ring-slate-primary focus:ring-opacity-75 focus:ring-offset-0`}
        type="text"
        placeholder={t("TRACK_FORM.TRACKING_NUMBER")}
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button
        onClick={handleClick}
        className={`h-${height} w-${height} rounded-e-md ${isDisabled ? "bg-red-secondary cursor-not-allowed" : "bg-red-primary cursor-pointer"}`}
      >
        <SearchIcon className="text-white" />
      </button>
    </form>
  );
};

export default SearchShipment;
