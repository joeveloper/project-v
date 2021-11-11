import { useState } from "react";
import myData from "./data.json";


const SearchBar = () => {
    const [results, setResults] = useState('')
    const handleSearch = () => {
        {myData.map(
            data => {
              console.log( 
                data.id,
                data.vendor , () => { setResults(handleSearch) }
              )
            }
          ) }
    }
    
    return ( 
        <div className="searchbar">
            <input type="text"  className="searchinput"  onChange={(e) => e.target.value}/>
            <button onClick={ handleSearch }>Search</button>
            
        
        </div>
     );
}
 
export default SearchBar;