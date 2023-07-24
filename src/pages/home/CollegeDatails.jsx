import { useLoaderData } from "react-router-dom";

const CollegeDatails = () => {
    const college = useLoaderData()
    console.log(college);
    return (
        <div className="container mx-auto py-10 ">
            <h1 className="text-4xl font-bold text-gray-800 py-8">{college[0]?.name}</h1>
            <>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={college[0].image} alt="Album" /></figure> <br />

                </div>
                <div className="card-body">
                    <h2 className="card-title">{college[0]?.name}</h2>
                    <p> <span className="font-bold">Admission Process:</span> {college[0]?.admissionProcess}</p>
                    <>
                        <p> <span className="font-bold text-2xl">Events 1</span></p>
                        <p> <span className="font-bold">Event name : </span>{college[0]?.events[0]?.name}</p>
                        <p> <span className="font-bold">Event Location : </span>{college[0]?.events[0]?.location}</p>
                        <p> <span className="font-bold">Event Date :</span>{college[0]?.events[0]?.date}</p>
                    </>
                    <>
                        <p> <span className="font-bold text-2xl">Events 2</span></p>
                        <p> <span className="font-bold">Event name : </span>{college[0]?.events[1]?.name}</p>
                        <p> <span className="font-bold">Event Location : </span>{college[0]?.events[1]?.location}</p>
                        <p> <span className="font-bold">Event Date :</span>{college[0]?.events[1]?.date}</p>
                    </>

                    <>
                        <p> <span className="font-bold text-2xl">Research Workes 2</span></p>
                        <p> <span className="font-bold">Title : </span>{college[0]?.researchWorks[1]?.title}</p>
                        <p> <span className="font-bold">Author : </span>{college[0]?.researchWorks[1]?.author}</p>
                        <p> <span className="font-bold">Published Date :</span>{college[0]?.researchWorks[1]?.publishedDate}</p>
                    </>
                    <>
                        <p> <span className="font-bold text-2xl">Sportes Categories</span></p>
                        <ul>
                            <li> {college[0]?.sportsCategories[0]}</li>
                            <li> {college[0]?.sportsCategories[1]}</li>
                            <li> {college[0]?.sportsCategories[2]}</li>
                            <li> {college[0]?.sportsCategories[3]}</li>
                        </ul>
                    </>

                </div>
            </>
        </div>
    );
};

export default CollegeDatails; <h1>college name </h1>