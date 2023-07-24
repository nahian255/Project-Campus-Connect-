import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

        navigate('/')
    };

    const handelGoogle = () => {
        googleSignIn()
            .then((result) => {

                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                // ...
            });

        navigate('/')
    }


    return (
        <div className="flex-1 flex justify-center items-center p-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-4">Sing in</h2>
                <form onSubmit={handelLogin}>
                    {/* Registration form fields go here */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">Sing in</button>
                </form>
                <p className="mt-4 ">New member? <Link to='/register' className="text-blue-500">Register</Link> here.</p>
                <button onClick={handelGoogle} className="btn btn-circle">
                    G
                </button>
            </div>
        </div>
    );
};

export default Login;