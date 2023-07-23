import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { logOut } = useContext(AuthContext)

    const logout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch(() => {
                // An error happened.
            });
    }



    return (
        <div>
            <h1> User deatiles</h1>
            <button onClick={logout}> Sign out </button>
        </div>
    );
};

export default Profile;