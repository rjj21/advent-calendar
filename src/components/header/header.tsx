import { Outlet, Link } from "react-router-dom"

const Header = () => {

    return (
        <>
            <nav className="fixed w-full">
                <div className="w-full h-14 bg-gray-50 shadow-xl flex items-center justify-center">
                    <Link to={"/"}>Home</Link>
                </div>
            </nav>
        <Outlet/>
        </>
    )
}

export default Header