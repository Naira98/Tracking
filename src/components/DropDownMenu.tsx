import { ReactNode } from "react";
import styles from "./DropDownMenu.module.css";
import { FiChevronDown } from "react-icons/fi";

interface DropDwonMenuProps {
  text: string;
  children: ReactNode;
}

const DropDownMenu = ({ text, children }: DropDwonMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>

      <FiChevronDown className={styles.arrow} />

      <div className={styles["content-container"]}>{children}</div>
    </div>
  );
};

export default DropDownMenu;
