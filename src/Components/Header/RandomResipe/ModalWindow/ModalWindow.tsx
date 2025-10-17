import { Link } from "react-router";
import styles from "./ModalWindow.module.css";
import type { ModalWindowProps } from "./ModalWindow.props";




const ModalWindow:React.FC<ModalWindowProps> = ({active, setActive, resipe, random}) =>{

    return (
      <div
        className={active ? styles.windowContainer : styles.inActive}
        onClick={() => setActive(false)}
      >
        <div
          className={styles.windowResipe}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.buttonClose}
            onClick={() => setActive(false)}
          >
            <img
              className={styles.imgClose}
              src="multiplication_17435831.png"
              alt=""
            />
          </button>
          <img className={styles.resipeImg} src={resipe.img} alt="" />
          <p className={styles.resipeName}>{resipe.name}</p>
          <button className={styles.resipeTag}>{resipe.tag}</button>

          <div className={styles.btnContainer}>
            <Link to={`/PagesResipe/${resipe.id}`}>
              <button className={styles.wiewResipe}>Посмотреть рецепт</button>
            </Link>
            <button className={styles.change} onClick={random}>
              Другой рецепт
            </button>
            <button className={styles.close} onClick={() => setActive(false)}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    );
}

export default ModalWindow