import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <header className="container-header">
            <Link to={"/Browser_Router/"} className="nav-link">Main</Link>
            <Link to={"/Browser_Router/Post"} className="nav-link">Post</Link>
            <Link to={"/Browser_Router/Photo"} className="nav-link">Photo</Link>
            <Link to={"/Browser_Router/Contacts"} className="nav-link">Contacts</Link>
        </header>
    )
}
export default Nav;
