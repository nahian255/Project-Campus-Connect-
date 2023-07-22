import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiAlignLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import { HiMenu, HiX } from 'react-icons/hi'; // Example icons from React Icons library


const Navbar = () => {
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