// src/components/CategoriesResipe/CategoriesResipe.tsx
import type { FC } from "react";
import { CategoriesObject } from "../../data";
import styles from "./CategoriesResipe.module.css";
import type { CategoriesResipeProps } from "./CategoriesResipe.props";

const CategoriesResipe: FC<CategoriesResipeProps> = ({ setButtonValue }) => {
  const handleCategoryClick = (tag: string) => {
    setButtonValue(tag);
  };

  return (
    <>
      <p className={styles.heading}>Категории</p>
      <div className={styles.container}>
        {CategoriesObject.map((item) => (
          <button
            key={item.id}
            className={styles.buttonCategories}
            onClick={() => handleCategoryClick(item.tag)}
            type="button"
          >
            <img src={item.img} alt={item.tag} className={styles.image} />
            <span className={styles.name}>{item.tag}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoriesResipe;
