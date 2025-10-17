
import { Route, Routes } from 'react-router'
import './App.css'
import { PagesResipe } from './Pages/PagesResipe/PagesResipe'
import { MainPage } from './Pages/MainPage/MainPage';





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
