import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/college/home.jpg"
import CollegesCard from "./CollegesCard";

const Home = () => {
    return (
        <div>
            <PagesBanner image={image} title={'Campus Connect'} subTitle={'Time to Bookin Your Favourite College'} ></PagesBanner>
            <div className="container mx-auto mb-10">
                <div>
                    <select className="select select-success py-10 w-full max-w-xs">
                        <option disabled selected>Pick your favorite anime</option>
                        <option>One Piece</option>
                        <option>Naruto</option>
                        <option>Death Note</option>
                        <option>Attack on Titan</option>
                        <option>Bleach</option>
                        <option>Fullmetal Alchemist</option>
                    </select>
                </div>
                <div>
                    <CollegesCard></CollegesCard>
                </div>

            </div>
        </div>
    );
};

export default Home;