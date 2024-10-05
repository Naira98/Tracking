import { ReactNode } from "react";
import styles from "../styles/DropDownMenu.module.css";
// import navbarStyles from "../styles/Navbar.module.css";
import { FiChevronDown } from "react-icons/fi";

interface DropDwonMenuProps {
  children: ReactNode;
  content: ReactNode;
}

const DropDownMenu = ({ children, content }: DropDwonMenuProps) => {
  return (
    <div className={styles.container}>
      {children}
      
      <FiChevronDown
          // className={navbarStyles.arrow}
        />

      <div className={styles["content-container"]}>{content}</div>
    </div>
  );
};

export default DropDownMenu;
