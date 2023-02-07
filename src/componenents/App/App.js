import styles from './App.module.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home'
import About from '../../pages/About'
import Error from '../../pages/Error'
import Logement from '../../pages/Logement';
import Footer from '../../shared/Footer';

function App() {
 return(
 <div className={styles.div}> 
 
 <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='*' element={<Error />}></Route>
    <Route path='/logements/:id' element={<Logement />}></Route>
   </Routes>
   <Footer />

</div>
 )
}

export default App;