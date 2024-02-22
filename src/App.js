import React from 'react'
import Landingpage from './store/pages/Landingpage'
import { Routes,Route } from 'react-router-dom'
import Mobilespage from './store/pages/Mobilespage'
import Mobliessingles from './store/singles/Mobliessingles'
import Computerpage from './store/pages/Computerpage'
import Computersingle from './store/singles/Computersingle'
import Furniturepage from './store/pages/Furniturepage'
import Furnituresingle from './store/singles/Furnituresingle'
function App() {
  return (
    
      <div>
        <Routes>
         < Route path='/' element={<Landingpage></Landingpage>} ></Route>
         <Route path='/moblies' element={<Mobilespage></Mobilespage>}></Route>
         <Route path='/moblies/:id' element={<Mobliessingles></Mobliessingles>}></Route>
         <Route path='/computers' element={<Computerpage></Computerpage>}></Route>
         <Route path='/computers/:id' element={<Computersingle></Computersingle>} ></Route>
         <Route path='/furn' element={<Furniturepage></Furniturepage>}></Route>
         <Route  path='/furn/:id' element={<Furnituresingle></Furnituresingle>}></Route>
        </Routes>
 </div>
  
  )
}

export default App