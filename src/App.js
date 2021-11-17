import './App.css';
import Results from './Results';
import SearchBar from './SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './Home';
import Create from './Create';


const App = (handleSearch) => {
  
  return ( 
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <div className= "content">
        <Routes>
          <Route exact path="/" element={<Home />}>
            
          </Route>
          <Route  path="/create" element={<Create />}>
            
          </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
      
    
   );
}
 
export default App;
