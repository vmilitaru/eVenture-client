import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events-page">
                            <a>Event</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
