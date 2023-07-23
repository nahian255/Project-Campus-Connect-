import { Link } from 'react-router-dom';


const HomeCard = ({ college }) => {
    console.log(college._id);
    return (
        <div>
            <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={college.image} alt={college.name} className="w-full h-56 object-cover object-center" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
                    <p className="text-gray-600 mb-2">Rating: {college.rating}</p>
                    <p className="text-gray-600 mb-2">Admission Date: {college.admissionDate}</p>
                    <p className="text-gray-600 mb-2">Research Count: {college.researchCount}</p>
                    <Link to={`/details/${college?._id}`}>
                        <button
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Details
                        </button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default HomeCard;