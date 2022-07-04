export default function Navbar() {
    // return JSX fragment 
    return (
        <nav className='nav'> 
        <a href="/" className="site-title">FourSeasons</a>
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
            <SetLink href="/spring">Spring</SetLink>
            <SetLink href="/summer">Summer</SetLink>
            <SetLink href="/autumn">Autumn</SetLink>
            <SetLink href="/winter">Winter</SetLink>
        </ul>
        </nav>
    )
}

//...props in case of custom props/class names
function SetLink({ href, children, ...props }) {
    const path = window.location.pathname
    // if path === href then active
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    )

}