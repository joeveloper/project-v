import './App.css';
import Results from './Results';
import SearchBar from './SearchBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import myData from './data.json'
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './Home';
import Create from './Create';


const App = (handleSearch) => {
  
  return ( 
      <div className="App">
      <Navbar/>
      <div className= "content">
        <Routes>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/Create">
            <Create/>
          </Route>
        </Routes> 
      </div>
    </div>
    
   );
}
 
export default App;
