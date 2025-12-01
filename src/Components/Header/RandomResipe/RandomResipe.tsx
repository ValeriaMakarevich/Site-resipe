// src/components/RandomResipe/RandomResipe.tsx
import ModalWindow from "./ModalWindow/ModalWindow";
import { useState } from "react";
import styles from "./RandomResipe.module.css";
import { resipeObject, type ResipeObject } from "../../../data";


const RandomResipe: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [resipe, setResipe] = useState<ResipeObject | null>(null);

  const getRandomRecipe = (): ResipeObject | null => {
    if (resipeObject.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * resipeObject.length);
    return resipeObject[randomIndex];
  };

  const handleOpenModal = () => {
    const recipe = getRandomRecipe();
    if (recipe) {
      setResipe(recipe);
      setModalActive(true);
    }
  };

  return (
    <>
      <img
        className={styles.backgroundResipe}
        src="fanera-doska.jpg"
        alt="Фон кухонной доски"
      />
      <div className={styles.randomResipe}>
        <h1 className={styles.title}>Не знаете, что приготовить сегодня?</h1>
        <p className={styles.text}>Нажмите на кнопку</p>
        <button className={styles.buttonResipe} onClick={handleOpenModal}>
          ✨ Случайный рецепт
        </button>
      </div>

      {resipe && (
        <ModalWindow
          resipe={resipe}
          active={modalActive}
          setActive={setModalActive}
          random={handleOpenModal}
        />
      )}
    </>
  );
};

export default RandomResipe;
