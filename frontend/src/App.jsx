import './App.css';
import { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/HomePage'
import Learner from './Pages/LearnerDash'
import Trainer from './Pages/TrainerDash'
import Admin from './Pages/AdminDash'
import LearnerRegister from './Pages/LearnerRegister'
import LearnerLogin from './Pages/LearnerLogin'
import { ThemeProvider } from './Contexts/theme';


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'



function App() {
  
  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = () =>{
    setThemeMode('light')
  }
  useEffect(()=>{
    document.querySelector('body').classList.remove('dark','light')
    document.querySelector('body').classList.add(themeMode)
  },[themeMode])
  return (
    <>
     <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='learner' element={<Learner />} /> 
        <Route path='trainer' element={<Trainer/>} />
        <Route path='admin' element={<Admin/>} /> 
        <Route path='learnerRegister' element={<LearnerRegister/>} />
        <Route path='learnerLogin' element={<LearnerLogin/>} />
           
      </Routes>
      </ThemeProvider>

    </>
  )
}

export default App
