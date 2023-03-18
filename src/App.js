
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Yarns from './Yarns'
import NewYarnForm from './NewYarnForm'
import Yarn from './Yarn'
import NavBar from './NavBar'

function App() {
  return (
       <>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/yarns' element={<Yarns />}/>
        <Route path='/yarns/new' element={<NewYarnForm />}/>
        <Route path='/yarns/:id' element={<Yarn />}/>
      </Routes>
      </>
  );
}

export default App;
