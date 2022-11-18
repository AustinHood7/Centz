import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../Assets/centz50x65.png'
import SearchBar from './SearchBar';
import { useEffect, useState} from 'react'

export default function Navbar() {

    const [data, setData] = useState([{}])

    useEffect(() =>  {
        fetch("/top-coins").then(
        res => res.json()
        ).then(
        data => {
            setData(data)
            console.log(data)
        }
        )
    }, [])
    
    return (
        <nav className="nav">
            <SearchBar placeholder="Search..." data={data}/>
            <Link to="/" className="site-title"><img src={logo} alt=''/></Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

//temp comment
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