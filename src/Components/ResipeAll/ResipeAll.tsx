import { useEffect, useState } from "react";
import styles from "./ResipeAll.module.css";
import SearchResipe from "./SearchResipe/SearchResipe";
import { Link } from "react-router";
import { resipeObject, type ResipeObject } from "../../data";
import CategoriesResipe from "../CategoriesResipe/CategoriesResipe";

const ResipeAll: React.FC = () => {
  const [resipeList, setResipeList] = useState(resipeObject);
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");


  const filterResipe = (
    inputValue: string,
    buttonValue: string,
    resipeArray: Array<ResipeObject>
  ) => {
   if (!inputValue && !buttonValue) {
      return resipeArray;
    }

    return resipeArray.filter(({ name, tag }) => {
      const matchesInput = inputValue
        ? name.toLowerCase().includes(inputValue.toLowerCase())
        : true;
      const matchesButton = buttonValue
        ? tag === buttonValue
        : true;
      return matchesInput && matchesButton;
    });
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredResipe = filterResipe(
        inputValue,
        buttonValue,
        resipeObject
      );
      setResipeList(filteredResipe);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [inputValue, buttonValue]);

  return (
    <>
      <CategoriesResipe
        setButtonValue={setButtonValue}
      />
      <SearchResipe inputValue={inputValue} setInputValue={setInputValue} />

      <div className={styles.ResipeContainer}>
        {resipeList.map((item, id) => {
          return (
            <div className={styles.CardContainer} key={id}>
              <Link
                to={`/PagesResipe/${item.id}`}
              >
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
