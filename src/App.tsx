
import { Route, Routes } from 'react-router'
import './App.css'
import { PagesResipe } from './pages/PagesResipe/PagesResipe'
import { MainPage } from './pages/mainPage/MainPage'




const App:React.FC = () => {
<<<<<<< HEAD

=======
  
>>>>>>> bfdeaa1d845a140df3741aeadf76ffcf86f9f319
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
