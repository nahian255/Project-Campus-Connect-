import PagesBanner from "../shared/PagesBanner";
import CollegeCard from "./CollegeCard";
import image from "../../assets/college/college3.jpg"
import useMenu from "../../hooks/useMenu";


const Colleges = () => {

    const [name] = useMenu()

    return (
        <div>
            <PagesBanner image={image} title={'All Colleges'}></PagesBanner>
            <div className="flex flex-wrap justify-center gap-4 py-10 p-4">
                {name.map((college) => (
                    <CollegeCard key={college.id} college={college} />
                ))}
            </div>
        </div>
    );
};

export default Colleges;