import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useMenu from "../../hooks/useMenu";
import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/college/college3.jpg"

const MyCollege = () => {
    const { collegeData } = useContext(AuthContext)
    const [name] = useMenu()
    console.log('database', name);
    console.log('my-college', collegeData);

    const college = name.filter((item) => item.name === collegeData)
    console.log(college);

    return (
        <div>
            <PagesBanner image={image} title={'My College'}></PagesBanner>
            <div>
                {

                }
                <h1 className="text-4xl">College Name = {college[0]?.name}</h1>
                <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-2 mb-2">
                    <img src={college[0]?.image} alt={college[0]?.name} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h2 className="text-xl font-semibold mb-2">{college[0]?.name}</h2>
                    <p className="text-gray-600 mb-4">{college[0]?.data}</p>
                    {/* Add more details as needed */}
                </div>
                <div>
                    {collegeData ? (
                        <div>

                        </div>
                    ) : (
                        <p>No college data available. Please submit the admission form first.</p>
                    )}
                    {/* Add a review section here */}
                </div>
            </div>
        </div>
    );
};

export default MyCollege;