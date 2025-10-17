import type { FC, MouseEvent } from "react";
import { CategoriesObject } from "../../data";
import styles from "./CategoriesResipe.module.css";
import type { CategoriesResipeProps } from "./CategoriesResipe.props";



const CategoriesResipe: FC<CategoriesResipeProps> = ({ setButtonValue }) => {
  const getButtonValue = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setButtonValue((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <p className={styles.heading}>Категории</p>

      <div className={styles.container}>
        {CategoriesObject.map((item, id) => {
          return (
            <form className={styles.buttonCategories} key={id}>
              <input
                onClick={getButtonValue}
                className={styles.button}
                type="image"
                src={item.img}
                value={item.tag}
              />
              <label className={styles.name}>{item.tag}</label>
            </form>
          );
        })}
      </div>
    </>
  );
};
export default CategoriesResipe;
