
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="px-4">
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        {/* Add more contact information as needed */}
                    </div>
                    <div className="px-4">
                        <h3 className="text-lg font-semibold mb-2">Address</h3>
                        <p>123 College Street,</p>
                        <p>City, State, Zip Code</p>
                        {/* Add more address information as needed */}
                    </div>
                    <div className="px-4">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex items-center">
                            <a href="#" className="text-white mr-4 hover:text-blue-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white mr-4 hover:text-blue-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-blue-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 border-gray-600" />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Your College Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
