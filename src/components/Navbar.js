import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/create'>Criar cliente</Link>
        </nav>
    )
}

export default Navbar