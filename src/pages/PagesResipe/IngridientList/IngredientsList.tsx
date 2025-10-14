import styles from "./IngredientsList.module.css";

export const IngredientsList = ({ ingredients }) => {
  return (
    <>
      <h2 className={styles.titleProduct}>Ингридиенты</h2>
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
