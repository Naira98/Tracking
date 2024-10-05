import { FunctionComponent, ReactElement, ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TrackForm from "./TrackForm";

export const ShiftingDropDown = () => {
  return (
    <div className="bg-neutral-950 text-neutral-200 flex h-96 w-full justify-start p-8 md:justify-center">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { t } = useTranslation();

  const handleSetSelected = (val: number | null) => {
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => setSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((tap) => {
        return (
          <Tab
            key={tap.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={tap.id}
          >
            {t(`NAVBAR.${tap.title}`)}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

export const Tab = ({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactElement;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div onMouseLeave={() => setIsHovered(false)}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onClick={() => setIsHovered(true)}
        className={`relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors`}
      >
        <span>{children}</span>
        <FiChevronDown
          className={`transition-transform ${isHovered ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isHovered && <Content Content={Content} />}
      </AnimatePresence>
    </div>
  );
};

const Content = ({ Content }: { Content: FunctionComponent }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] rounded-md"
    >
      <Bridge />
      <div className="overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            x: 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <TrackShipment />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const TrackShipment = () => {
  return (
    <div>
      <TrackForm />
    </div>
  );
};

const Prices = () => {
  const { t } = useTranslation();
  return (
    <div className="border-slate-secondary flex rounded-md border-2 p-2 shadow-md">
      <div>
        <div className="hover:bg-slate-primary block p-2 text-sm hover:cursor-pointer">
          {t("NAVBAR.LARGE_COMPANY")}
        </div>
        <div className="hover:bg-slate-primary block p-2 text-sm hover:cursor-pointer">
          {t("NAVBAR.SMALL_COMPANY")}
        </div>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "TRACK_SHIPMENT",
    Component: TrackShipment,
  },
  {
    title: "PRICES",
    Component: Prices,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
