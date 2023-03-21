
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Yarns from './Yarns'
import NewYarnForm from './NewYarnForm'
import Yarn from './Yarn'
import NavBar from './NavBar'
import YarnDetails from './YarnDetails';

function App() {
  return (
       <>
        <NavBar/>
          <div class='content'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/yarns' element={<Yarns />}/>
              <Route path='/yarns/new' element={<NewYarnForm />}/>
              {/* <Route path='/yarns/:id' element={<Yarn />}/> */}
              <Route path='yarns/*' element={<YarnDetails />}/>
            </Routes>
         </div>
      </>
  );
}

export default App;
