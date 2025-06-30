import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <h1>My todo list</h1>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">Link</Link>
            </nav>
        </header>
    )
};

export default Navbar;