import { useState } from "react";

const Results = (props) => {
     
    return ( 
        <div>
          {props.results.length > 0 ? props.results.map(data => (
            <div>
              <p>{data.id}</p>
              <p>{data.firstname}</p>
              <p>{data.lastname}</p>
              <p>{data.businessName}</p>
            </div>
          )) : <p >Search Result not found!</p>}
        </div>
     );
}
 
export default Results;