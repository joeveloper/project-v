import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>PR0JECT-V</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={{
                    color: "#fff",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Sign Up</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;