import '../styles/App.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Error from '../pages/Error'

function App() {
 return(
 <div> 
 
 <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='*' element={<Error />}></Route>
   </Routes>

</div>
 )
}

export default App;