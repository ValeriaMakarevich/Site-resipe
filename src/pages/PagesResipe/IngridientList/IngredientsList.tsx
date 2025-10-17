import type { IngredientsListProps } from "./IngrediensttsLi.props";
import styles from "./IngredientsList.module.css";


export const IngrediensttsLi: React.FC<IngredientsListProps> = ({ ingredients}) => {
  return (
    <>
      <h2 className={styles.titleProduct}>Ингредиенты</h2>
      {ingredients.map((item, index) => {
        return (
          <ul className={styles.ingredients} key={index}>
            <li>{item}</li>
          </ul>
        );
      })}
    </>
  );
};
