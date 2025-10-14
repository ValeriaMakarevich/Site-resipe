import { useEffect, useState } from "react";
import styles from "./ResipeAll.module.css";
import SearchResipe from "./SearchResipe/SearchResipe";
import { Link } from "react-router";
import { resipeObject, type ResipeObject } from "../../data";




const ResipeAll: React.FC = () => {
 
const [resipeList, setResipeList] = useState(resipeObject)
const [inputValue, setInputValue] = useState('')

const filterResipe = (request: string, resipeArray:Array<ResipeObject>) => {
  if(!request){
    return resipeArray;
  }
  return  resipeArray.filter(({name}) =>
  name.toLowerCase().includes(request.toLowerCase())

)
}

useEffect(() => {
  const Debounce = setTimeout(()=>{
    const filteredResipe = filterResipe(inputValue, resipeObject)
    setResipeList(filteredResipe)
  }, 300)
  return() => clearTimeout(Debounce)
})


  return (
    <>
      <SearchResipe inputValue={inputValue} setInputValue={setInputValue} />
      
        <div className={styles.ResipeContainer}>
          {resipeList.map((item, id) => {
            return (
              
                <div className={styles.CardContainer} key={id}>
                  <Link to={`/PagesResipe/${item.id}`} >
                  <img className={styles.imageResipe} src={item.img} alt="" />
                  <p className={styles.resipeName}>{item.name}</p>

                  <button className={styles.tagButton}>
                    <p>{item.tag}</p>
                  </button>
                  </Link>
                </div>
              
            );
          })}
          
        </div>
     
    </>
  );
};

export default ResipeAll;
