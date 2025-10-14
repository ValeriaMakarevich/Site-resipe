import ModalWindow from './ModalWindow/ModalWindow'
import { useState } from 'react'
import styles from './RandomResipe.module.css' 
import { resipeObject} from '../../../data'


const RandomResipe:React.FC = () =>{
  const [modalActive, setModalActive] = useState(false)
  const [resipe, setResipe] = useState({name: '', img: '', tag: ''});

const modalOpen = () =>{
  setModalActive(true)
}

  const random = () =>{
    const randomIndex = Math.floor(Math.random() * resipeObject.length) 
    setResipe(resipeObject[randomIndex])
  }

  console.log(resipe)
    return (
  <>
        <img className={styles.backgroundResipe} src="fanera-doska.jpg" alt="" />
        <div className={styles.randomResipe}>
        <p className={styles.title}>Не знаете что приготовить сегодня?</p>
        <p className={styles.text}>Нажмите на кнопку</p>
        <button className={styles.buttonResipe} onClick={() => {modalOpen(); random()} }>Случайный рецепт</button>
        </div>
        <ModalWindow resipe={resipe} active={modalActive} setActive={setModalActive} random={random}/>
     </>
    )
}

export default RandomResipe