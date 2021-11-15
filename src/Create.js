const Create = () => {
    
        

    return ( 
        <div className="create">
            <h2>Create Vendor Profile</h2>
            <form >
                <label htmlFor="">Firstname</label>
                <input type="text"
                required 
                />
                <label htmlFor="">Lastname</label>
                <input type="text"
                required 
                />
                <label htmlFor="">Instagram username</label>
                <input type="text"
                required 
                />
                <label htmlFor="">Twitter username</label>
                <input type="text"
                required 
                />
                <label htmlFor="">Business details</label>
                <textarea type="text"
                required 
                />
                <button>Submit</button>
                
                
                
            </form>
            
        </div>
     );
}
 
export default Create;