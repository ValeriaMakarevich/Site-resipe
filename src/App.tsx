
import { Route, Routes } from 'react-router'
import './App.css'
import { PagesResipe } from './pages/PagesResipe/PagesResipe'
import { MainPage } from './pages/mainPage/MainPage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { PREFIX } from './Components/helpers/Api'
import type { ResipeObject } from './data'



const App:React.FC = () => {
  
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
