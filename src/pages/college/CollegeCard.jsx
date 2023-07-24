// CollegeCard.js
import { useState } from 'react';

const CollegeCard = ({ college }) => {
    console.log(college?.events[0]);

    // console.log(college);
    const [showDetails, setShowDetails] = useState(false);


    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={college.image} alt={college.name} className="w-full h-56 object-cover object-center" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
                <p className="text-gray-600 mb-2">Rating: {college.rating}</p>
                <p className="text-gray-600 mb-2">Admission Date: {college.admissionDate}</p>
                <p className="text-gray-600 mb-2">Research Count: {college.researchCount}</p>
                <button
                    onClick={toggleDetails}
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500"
                >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails && (
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2">Events:</h4>
                        {/* Render college events here */}
                        <p>Event Name : {college?.events[0]?.name}</p>
                        <p>Event Location : {college?.events[0]?.location}</p>
                        <p>Event Date : {college?.events[0]?.date}</p>

                        <h4 className="text-lg font-semibold mt-4 mb-2">Sports Facilities:</h4>
                        {/* Render sports facilities here */}
                        <p>Sports Facility : {college?.sportsCategories[0]},{college?.sportsCategories[1]},{college?.sportsCategories[2]},{college?.sportsCategories[3]}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeCard;
