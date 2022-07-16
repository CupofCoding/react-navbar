import { Link, useMatch, useResolvedPath } from 'react-router-dom';


export default function Navbar() {
    // return JSX fragment 
    return (
        <nav className='nav'> 
        {/* <a href="/" className="site-title">FourSeasons</a> */}
        {/* instead of 'href', Link component needs 'to' */}
        <Link to="/" className="site-title">FourSeasons</Link>
        <ul>
            {/* <li>
                <a href="/spring">Spring</a>
            </li>
            <li>
                <a href="/summer">Summer</a>
            </li>
            <li>
                <a href="/autumn">Autumn</a>
            </li>
            <li>
                <a href="/winter">Winter</a>
            </li> */}

            {/* <SetLink href="/spring">Spring</SetLink>
            <SetLink href="/summer">Summer</SetLink>
            <SetLink href="/autumn">Autumn</SetLink>
            <SetLink href="/winter">Winter</SetLink> */}
            
            <SetLink to="/spring">Spring</SetLink>
            <SetLink to="/summer">Summer</SetLink>
            <SetLink to="/autumn">Autumn</SetLink>
            <SetLink to="/winter">Winter</SetLink>
        </ul>
        </nav>
    )
}

// //...props in case of custom props/class names
// function SetLink({ href, children, ...props }) {
//     const path = window.location.pathname
//     // if path === href then active
//     return (
//         <li className={path === href ? "active" : ""}>
//             {/* <a href={href}>{children}</a> */}
//             <Link href={href}>{children}</Link>
//         </li>
//     )

    function SetLink({ to, children, ...props }) {
        // active classes and window.location isn't changing when using Link component as the path is no longer accurate as ReactRouter has its own way of handling it using their custom hooks. 
        // const path = window.location.pathname 
        // useResolvedPath takes a relative/absolute path and combines it with current path user is on and provides the full path that's being accessed.
        const resolvedPath = useResolvedPath(to)
        // useMatch hook is used to compare current path to destination path. 'to' is used to define absolute/direct paths with "/" or relative pages that are relative to whatever page user is currently on. 
        // arguments passed can be a string or object, selected defined method.pathname. end: true confirms that the path matches exactly, otherwise any path id inside it will also match which functions the same as 'path === to'
        const isActive = useMatch({ path: resolvedPath.pathname, end: true})
        
        return (
            <li className={ isActive ? "active" : ""}>
                {/* <a to={to}>{children}</a> */}
                <Link to={to}>{children}</Link>
            </li>
        )
}