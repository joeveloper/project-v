import './App.css';
import Results from './Results';
import SearchBar from './SearchBar';
import myData from './data.json'


const App = (handleSearch) => {
  
  return ( 
    <div>
      <h1>PROJECT - V</h1>
      <p>Enter your Made In Naija product serial number to verify its authenticity</p>
      <SearchBar />
    </div>
   );
}
 
export default App;
