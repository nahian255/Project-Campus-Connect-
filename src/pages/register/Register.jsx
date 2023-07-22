import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { creatUser } = useContext(AuthContext)
    const navigate = useNavigate()


    const handelRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        creatUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                //   const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
        navigate('/')
    };

    return (
        <div className="flex-1 flex justify-center items-center p-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-4">Register</h2>
                <form onSubmit={handelRegister}>
                    {/* Registration form fields go here */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Register</button>
                </form>
                <p className="mt-4 ">Already member? <Link to='/login' className="text-blue-500">Sign in</Link> here.</p>
            </div>
        </div>
    );
};

export default Register;