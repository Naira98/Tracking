import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <span className={styles.loader}></span>
    </div>
  );
};

export default Spinner;
