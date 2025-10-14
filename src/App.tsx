
import { Route, Routes } from 'react-router'
import './App.css'
import { PagesResipe } from './pages/PagesResipe/PagesResipe'
import { MainPage } from './pages/mainPage/MainPage'




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
