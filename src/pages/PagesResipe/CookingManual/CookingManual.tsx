import styles from "./CookingManual.module.css";

export const CookingManual = ({ manual }) => {
  return (
    <>
      <h2 className={styles.titleManual}>Инструкция по приготовлению</h2>
      {manual.map((item) => {
        return <div className={styles.manual}>{item}</div>;
      })}
    </>
  );
};
