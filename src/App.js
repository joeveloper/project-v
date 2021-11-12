import './App.css';
import Results from './Results';
import SearchBar from './SearchBar';


const App = (handleSearch) => {
  
  return ( 
    <div>
      <h1>PROJECT - V</h1>
      <p>Enter your Made In Naija product serial number to verify its authenticity</p>
      <SearchBar  />
      <Results/>
    </div>
   );
}
 
export default App;
