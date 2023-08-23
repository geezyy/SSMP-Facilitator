import '../src/index.css';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/landing' element={<Layout/>}/>
      
    </Routes>
  );
}

export default App;
//sailadmin23