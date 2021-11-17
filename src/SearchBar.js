import { useState } from "react";
import myData from "./Data/data.json";
import Results from "./Results";



const SearchBar = (props) => {
    const [results, setResults] = useState([]);
    const [searchString, setSearchString] = useState('');


  const searchData = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    const result = myData.filter((data) => data.businessName.toLowerCase().includes(lowerCaseTerm));
    setResults(result);
  }
    const handleSearch = (event) => {
    searchData(searchString)
    }
    
    return ( 
        <div className="searchbar">
            <input type="text"  className="searchinput"  onChange={(e) => setSearchString(e.target.value)}/>
            <button onClick={handleSearch }>Search</button>
          <br />
          <br />
          <Results results={results} />
        </div>
     );
}
 
export default SearchBar;