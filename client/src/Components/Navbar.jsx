import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../Assets/centz50x65.png'

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img src={logo} alt=''/></Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/details">Details</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {

    //This is making sure that the url is the exact same
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}