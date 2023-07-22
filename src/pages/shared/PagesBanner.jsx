
// import img from '../../assets/menu/banner3.jpg'
const PagesBanner = ({ image, title, subTitle }) => {
    return (
        <div>
            <section
                className="banner  bg-cover bg-center h-[600px] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${image})`,
                    //  filter: 'blur(1px)',
                }}
            >
                <div className="text-black text-center">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="mt-4 text-xl">{subTitle}</p>
                </div>
            </section>
        </div>
    );
};

export default PagesBanner;