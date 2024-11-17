import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HomeBody from './components/Body'
import SearchBody from './components/SearchBody'

function App() {
  return (
    <BrowserRouter basename='/'>
     <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<HomeBody/>}/>
            <Route path='/search/:movieName' element={<SearchBody/>}/>
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
