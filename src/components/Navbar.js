export default function Navbar() {
    // return JSX fragment 
    return <nav className='nav'> 
    <a href="/" className="site-title">FourSeasons</a>
    <ul>
        <li>
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
        </li>
    </ul>
    </nav>
}