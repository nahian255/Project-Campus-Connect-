import { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiAlignLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
// import { HiMenu, HiX } from 'react-icons/hi'; // Example icons from React Icons library


const Navbar = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const li = (
        <>
            <li> <Link to='/' className="text-white hover:text-orange-400">Home</Link></li>
            <li> <Link to='/college' className="text-white hover:text-orange-400">Colleges</Link></li>
            <li> <Link to='/admission' className="text-white hover:text-orange-400">Admission</Link></li>
            <li> <Link to='/my-college' className="text-white hover:text-orange-400">My College</Link></li>
            {
                user ? <> <Link to='/profile'><h1 className='text-blue-400'> name : {user.displayName}</h1></Link> </> : <>
                    <li> <Link
                        to="/register"
                        className="inline-block px-3 py-1 font-bold text-blue-500 bg-white rounded shadow-md hover:bg-blue-100  focus:outline-none focus:ring focus:ring-offset-2"
                    >
                        Register
                    </Link></li>
                    <li> <Link
                        to="/login"
                        className="inline-block px-3 py-1 font-bold text-blue-500 bg-white rounded shadow-md hover:bg-blue-100  focus:outline-none focus:ring focus:ring-offset-2"
                    >
                        Sign in
                    </Link></li>
                </>
            }


        </>

    )
    return (
        <div >
            <nav className="bg-black">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex justify-around">
                            <div className="">
                                {/* Your logo image or text */}
                                <h1 className='text-2xl text-white hover:text-orange-400'>LOGO</h1>
                            </div>
                            <  div className="hidden md:block">
                                <ul className="ml-96 flex items-center space-x-14">
                                    {li}

                                </ul>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300  focus:outline-none "
                            >
                                {isMenuOpen ? <AiOutlineClose /> : <BiAlignLeft />}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <ul className="mt-2 space-y-2">
                                {li}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;