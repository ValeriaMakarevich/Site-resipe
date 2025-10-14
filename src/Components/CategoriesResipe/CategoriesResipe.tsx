import { CategoriesObject } from "../../data";
import styles from "./CategoriesResipe.module.css";



const CategoriesResipe: React.FC = () => {
  
  const click = (e) =>{
    console.log(e.target.value)
  }

  return (
    <>
    <p className={styles.heading}>Категории</p>
   
    <div className={styles.container}>
         
      {CategoriesObject.map((item, id) => {
        return (
          <div key={id}>
            <button
              className={styles.buttonCategories}
              value={item.name}
              onClick={click}
            >
              <img className={styles.imageResipe} src={item.img} alt="" />
              {item.name}
            </button>
          </div>
        );
      })}
     
    </div>
    
    </>
  );
};
export default CategoriesResipe;
