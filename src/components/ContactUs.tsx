import { Box, Modal } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useLang } from "../context/useLang";
import { SUPPORT_PHONE_NUMBER } from "../utils/constants";

const ContactUs = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { lang } = useLang();
  const { t } = useTranslation();
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
        className="border-slate-primary rounded-md border-2"
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`border-slate-secondary absolute ${lang === "ar" ? "left-3" : "right-3"} top-3 rounded-full border-2 p-1 shadow-md hover:bg-gray-secondary`}
        >
          <IoCloseOutline size={24} color="#e30818" />
        </button>
        <div className="flex items-center gap-4">
          <span className="border-slate-secondary rounded-full border-2 p-3 shadow-md">
            <RiCustomerService2Line size={24} color="#e30818" />
          </span>
          <h1 className="text-red-primary text-2xl font-bold">
            {t("PROBLEM.CONTACT_US")}
          </h1>
        </div>

        <h1 className="mt-3 text-center text-lg font-bold">
          {SUPPORT_PHONE_NUMBER}
        </h1>
      </Box>
    </Modal>
  );
};

export default ContactUs;
