import '../src/index.css';
import Layout from './Components/Layout';
import Login from './Pages/Login';
import Tasks from './Pages/Tasks';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/landing' element={<Layout/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      
    </Routes>
  );
}

export default App;
//sailadmin23