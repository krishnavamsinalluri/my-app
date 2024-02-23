import React from 'react'
import Landingpage from './store/pages/Landingpage'
import { Routes,Route } from 'react-router-dom'
import Mobilespage from './store/pages/Mobilespage'
import Mobliessingles from './store/singles/Mobliessingles'
import Computerpage from './store/pages/Computerpage'
import Computersingle from './store/singles/Computersingle'
import Furniturepage from './store/pages/Furniturepage'
import Furnituresingle from './store/singles/Furnituresingle'
import Menpage from './store/pages/Menpage'
import Mensingle from './store/singles/Mensingle'
import Watchpage from './store/pages/Watchpage'
import Watchsingle from './store/singles/Watchsingle'
import Speakerpage from './store/pages/Speakerpage'
import Speakersingle from './store/singles/Speakersingle'
import Womenpage from './store/pages/Womenpage'
import Womensingle from './store/singles/Womensingle'
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
         <Route path='/men' element={<Menpage></Menpage>}></Route>
         <Route path="/men/:id" element={<Mensingle></Mensingle>}></Route>
         <Route path='/watch' element={<Watchpage></Watchpage>}></Route>
         <Route path='/watch/:id' element={<Watchsingle></Watchsingle>}></Route>
         <Route path='/speaker' element={<Speakerpage></Speakerpage>}></Route>
         <Route path="/speaker/:id" element={<Speakersingle></Speakersingle>}></Route>
         <Route path='/women' element={<Womenpage></Womenpage>}></Route>
         <Route path='/women/:id' element={<Womensingle></Womensingle>}></Route>
        </Routes>
 </div>
  
  )
}

export default App