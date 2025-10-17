import styles from "./PagesResipe.module.css";
import { useParams } from "react-router";
import { resipeObject } from "../../data";
import Logo from "../../Components/Header/Logo/Logo";
import { IngredientsList } from "./IngridientList/IngredientsList";
import { CookingManual } from "./CookingManual/CookingManual";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
;

export const PagesResipe = () => {
  const urlResipe = useParams();
  const idResipe = urlResipe.id;

  return (
    <>
    <ScrollToTop/>
      <Logo />
      {resipeObject.map((item, id) => {
        if (item.id == idResipe) {
          return (
            <div className={styles.container} key={id}>
              <h1 className={styles.title}>{item.name}</h1>
              <img className={styles.image} src={`/${item.img}`} alt="" />
              <IngredientsList  ingredients={item.ingredients} />
              <div className={styles.ingridients}></div>
              <CookingManual manual={item.manual}/>
            </div>
          );
        }
      })}
      <Logo/>
    </>
  );
};
