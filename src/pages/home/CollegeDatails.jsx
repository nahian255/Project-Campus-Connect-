import { useLoaderData } from "react-router-dom";

const CollegeDatails = () => {
    const college = useLoaderData()
    console.log(college);
    return (
        <div className="container mx-auto py-10 ">
            <h1 className="text-4xl text-bold text-gray-800 py-8"> {college[0]?.name}</h1>
            <>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={college[0].image} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{college[0]?.name}</h2>
                        <p>College Name: {college[0]?.name}</p>
                        <p>Admission Process: {college[0]?.admissionProcess}</p>
                    </div>
                </div>
            </>
        </div>
    );
};

export default CollegeDatails; <h1>college name </h1>