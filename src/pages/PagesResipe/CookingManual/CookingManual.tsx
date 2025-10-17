import styles from "./CookingManual.module.css";
import type { CookingManualProps } from "./CookingManual.props";

export const CookingManual: React.FC<CookingManualProps> = ({ manual }) => {
  return (
    <>
      <h2 className={styles.titleManual}>Инструкция по приготовлению</h2>
      {manual.map((item) => {
        return <div className={styles.manual}>{item}</div>;
      })}
    </>
  );
};
