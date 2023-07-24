import useMenu from "../../hooks/useMenu";
import HomeCard from "./HomeCard";

const CollegesCard = () => {
    const [name] = useMenu()
    const newName = name.slice(0, 3)
    // console.log(newName);

    return (
        <div>
            <h1 className="text-center font-bold mb-8 text-5xl">Top Colleges</h1>
            <div className="flex flex-wrap justify-center gap-20 p-4">
                {newName?.map((college) => (
                    <HomeCard key={college.id} college={college} />
                ))}
            </div>
        </div>
    );
};

export default CollegesCard; <h1>3 card show</h1>