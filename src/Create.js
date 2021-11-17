import { useState } from "react";


const Create = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [businessdetails, setBusinessdetails] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const vendorProfile = {firstname, lastname,instagram, twitter, businessdetails}
        console.log(firstname, lastname)

        fetch('http://localhost:3004', {              //code to add data to blog file (db.json)
            method: 'POST',                                 //using a post method
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(vendorProfile)
        }).then(()=>{
            console.log('new vendor profile added')
    })
} 

    return ( 
        <div className="create">
            <h2>Create Vendor Profile</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Firstname</label>
                <input type="text"
                value = {firstname}
                onChange={(event) => setFirstname(event.target.value)}
                required 
                />
                <label htmlFor="">Lastname</label>
                <input type="text"
                value = {lastname}
                onChange={(event) => setLastname(event.target.value)}
                required 
                />
                <label htmlFor="">Instagram username</label>
                <input type="text"
                value = {instagram}
                onChange={(event) => setInstagram(event.target.value)}
                required 
                />
                <label htmlFor="">Twitter username</label>
                <input type="text"
                value = {twitter}
                onChange={(event) => setTwitter(event.target.value)}
                required 
                />
                <label htmlFor="">Business details</label>
                <textarea type="text"
                value = {businessdetails}
                onChange={(event) => setBusinessdetails(event.target.value)}
                required 
                />
                <button>Submit</button>
                
                
                
            </form>
            
        </div>
     );
}
 
export default Create;