
const ImageGallery = () => {

    const images = [
        'https://media.istockphoto.com/id/484741611/photo/group-of-diverse-international-students-celebrating-graduation.jpg?s=612x612&w=0&k=20&c=rq6gWCf2scTq_fbvJwSYrL0pC8AfYuV7WDuvRmUmqz0=',
        'https://media.istockphoto.com/id/483228379/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=tfxSle4u-YBfEQGEcm3JoGdyPsv5M8RnkNjmowQyogQ=',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        'https://cdn.newsbook.com.mt/wp-content/uploads/2021/09/19203624/accomplishment-ceremony-education-graduation-preview.jpg',
        // Add more image paths as needed
    ];

    return (
        <div>
            <h1 className="text-center text-5xl"> Image gallery </h1>
            <>
                <h1>College A graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto mt-10">
                    <div className="flex overflow-x-auto">
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-64 h-48 object-cover rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1>College B graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto mt-10">
                    <div className="flex overflow-x-auto">
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-64 h-48 object-cover rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1>College C graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto mt-10">
                    <div className="flex overflow-x-auto">
                        {images.map((image, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-64 h-48 object-cover rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </>

        </div>
    );
};

export default ImageGallery;