
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter