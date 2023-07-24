import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useMenu from "../../hooks/useMenu";
import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/college/college3.jpg"
import ReviewForm from "./ReviewFrom";

const MyCollege = () => {

    const { collegeData } = useContext(AuthContext);
    const [name] = useMenu();

    const college = name.filter((item) => item.name === collegeData);


    return (
        <div>
            <PagesBanner image={image} title={'My College'}></PagesBanner>
            <div>
                <div>
                    {collegeData ? (
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
                                <ReviewForm />
                            </>
                        </div>
                    ) : (
                        <p className="py-52">No college data available. Please submit the admission form first.</p>
                    )}
                    {/* Add a review section here */}
                </div>
            </div>
        </div>
    );
};

export default MyCollege;