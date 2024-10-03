import { useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
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
      <div className="flex items-center justify-center gap-2">
        <input
          className="h-9 rounded-md border-2 border-slate px-1 transition-all focus:outline-none focus:ring focus:ring-slate focus:ring-opacity-75 focus:ring-offset-0"
          type="text"
          placeholder={t("trackingNumber")}
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className={`rounded-md ${isDisabled ? "bg-red-secondary cursor-not-allowed" : "bg-red-primary cursor-pointer"}`}
        >
          <SearchIcon
            className="h-9 rounded-md p-1"
            sx={{
              color: "white",

              fontSize: 35,
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TrackForm;
