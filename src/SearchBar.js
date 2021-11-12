import { useState } from "react";
import myData from "./data.json";
import Results from "./Results";



const SearchBar = () => {
    const [results, setResults] = useState('')
    const handleSearch = (event) => {
      {myData.map(data => (
        <div>
            <p>{data.id}</p>
            <p>{data.vendor}</p>
        </div>
    ))}
    console.log(event)
    }
    
    return ( 
        <div className="searchbar">
            <input type="text"  className="searchinput"  onChange={(e) => e.target.value}/>
            <button onClick={ handleSearch }>Search</button>
            
        
        </div>
     );
}
 
export default SearchBar;