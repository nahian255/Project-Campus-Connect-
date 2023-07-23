import { useLoaderData } from "react-router-dom";

const CollegeDatails = () => {
    const college = useLoaderData()
    console.log(college);
    return (
        <div>
            <h1>college name {college[0].name}</h1>
        </div>
    );
};

export default CollegeDatails; <h1>college name </h1>