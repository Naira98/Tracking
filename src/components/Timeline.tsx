import clsx from "clsx";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { Color } from "../utils/stateColor";

interface TimelineStep {
  state: "DONE" | "IN PROGRESS" | "UPCOMING";
  text: string;
  subtext?: string;
  icon: ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
  color: Color;
}

const Timeline = (props: TimelineProps) => {
  const { i18n } = useTranslation();

  return (
    <div className="relative m-6 -mb-8 flex flex-col md:mb-20 md:flex-row">
      <div className="absolute flex flex-col md:w-full md:flex-row">
        <div className="md:flex-[0.5]" />
        {props.steps.slice(1).map((step, index) => (
          <div
            key={index}
            className={clsx(
              "h-16 w-1 md:invisible md:h-1 md:w-auto md:flex-1 md:translate-x-0 md:translate-y-[-50%] lg:visible",
              i18n.dir() == "ltr" ? "translate-x-[-50%]" : "translate-x-[50%]",
              {
                "bg-slate-secondary": step.state == "UPCOMING",
                [props.color.background]: step.state != "UPCOMING",
              },
            )}
          />
        ))}
        <div className="md:flex-[0.5]" />
      </div>
      {props.steps.map((step, index) => (
        <div key={index} className="min-h-16 flex-1 md:min-h-0">
          <TimelineNode step={step} color={props.color} />
        </div>
      ))}
    </div>
  );
};

const TimelineNode = ({
  step,
  color,
}: {
  step: TimelineStep;
  color: Color;
}) => {
  const { i18n } = useTranslation();

  return (
    <div className="relative">
      <div
        className={clsx(
          "absolute top-[50%] flex translate-y-[-50%] items-center justify-center rounded-full border-2 md:top-0",
          i18n.dir() == "ltr"
            ? "translate-x-[-50%] md:left-[50%]"
            : "translate-x-[50%] md:right-[50%]",
          {
            "h-12 w-12": step.state != "DONE",
            "h-7 w-7": step.state == "DONE",
            "border-slate-secondary bg-white text-gray-primary":
              step.state == "UPCOMING",
            [`border-white ${color.background} text-white`]:
              step.state != "UPCOMING",
          },
        )}
      >
        {step.state == "DONE" ? <FaCheck /> : step.icon}
      </div>
      <div
        className={clsx(
          "absolute translate-y-[-50%] px-1 md:top-8 md:w-full md:translate-y-0 md:text-center",
          i18n.dir() == "ltr"
            ? "left-10 md:left-auto"
            : "right-10 md:right-auto",
        )}
      >
        <div
          className={clsx("font-bold", {
            "text-gray-primary": step.state == "UPCOMING",
            "text-black": step.state != "UPCOMING",
          })}
        >
          {step.text}
        </div>
        <div className={color.text}>{step.subtext}</div>
      </div>
    </div>
  );
};

export default Timeline;
