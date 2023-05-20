import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
    

    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to='posts'>
                        Post List
                    </NavLink></li>
                    <li><NavLink to='create'>
                        Create a post
                    </NavLink></li>
                </ul>
            </nav>

            <Outlet />
            <footer>Geeks</footer>
        </>
    )
}
export default Layout