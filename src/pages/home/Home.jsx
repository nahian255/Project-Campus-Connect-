import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/college/home.jpg"
import CollegesCard from "./CollegesCard";
import ImageGallery from "./ImageGallery";
import ResearchPapers from "./ResearchPaper";
import Review from "./review/Review";
import FaqSection from "./faq/Faq";

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
                    <ImageGallery></ImageGallery>
                    <ResearchPapers />
                    <Review></Review>
                    <FaqSection />
                </div>

            </div>
        </div>
    );
};

export default Home;