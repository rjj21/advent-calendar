import { Outlet, Link } from "react-router-dom"
import image from '../../assets/octopus.svg'

const Header = () => {

    return (
        <>
            <nav className="fixed w-full">
                <div className="w-full h-14 bg-gray-50 shadow-xl flex items-center justify-center">
                    <Link to={"/"}>
                        <img src={image} alt='Octopus' height='40' width='40' />
                    </Link>
                </div>
            </nav>
        <Outlet/>
        </>
    )
}

export default Header