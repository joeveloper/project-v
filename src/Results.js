import SearchBar from "./SearchBar";
import myData from "./data.json";
import { useState } from "react";

const Results = (handleSearch) => {
    const [viewResults, setViewResults] = useState('')
    // const finalResult = () => {
    //     myData.map(data => (
    //         <div>
    //             <p key={data.id}>{data.id}</p>
    //             <p>{data.vendor}</p>
    //         </div>
    //     ))
    // }
    return ( 
        <div>
            {}
        </div>
     );
}
 
export default Results;