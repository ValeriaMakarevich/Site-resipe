
import { Route, Routes } from 'react-router'
import './App.css'
import { PagesResipe } from './pages/PagesResipe/PagesResipe'
import { MainPage } from './pages/mainPage/MainPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PREFIX } from './Components/helpers/Api'
import type { ResipeObject } from './data'



const App:React.FC = () => {
  //const [resipeList, setResipeList] = useState<ResipeObject>()
  //const [itemResipe, setItemResipe] = useState()
  
 // useEffect(() =>{
   //  axios.get(PREFIX).then((resp) =>{
     // const resipeObject = resp.data
    //  setResipeList(resipeObject)
    // })
 // }, [setResipeList])
  

//useEffect(() => {
  //axios.get(`${PREFIX}/${id}`).then((resp) => {
  ///  const resipeObject = resp.data;
   // setResipeList(resipeObject);
 /// });
///
// }, [setResipeList]);


  //console.log(resipeList)
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/PagesResipe/:id" element={<PagesResipe />}/>
      </Routes>
    </>
  );
}

export default App
