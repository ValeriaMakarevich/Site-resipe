import styles from './SearchResipe.module.css' 

interface SearchResipeProps {
inputValue: string;
setInputValue: (open: string) => void;
  
  }

const SearchResipe:React.FC<SearchResipeProps> = ({inputValue, setInputValue}) =>{
return(
    <div className={styles.searchContainer}>
    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={styles.search} type="text" placeholder="Поиск" />
    </div>
)
}
export default SearchResipe