import imags from '../../assets/groupPictures/images (1).jpg'
import imags1 from '../../assets/groupPictures/images 1.jpg'
import imags2 from '../../assets/groupPictures/images 2.jpg'
import imags3 from '../../assets/groupPictures/images.jpg'
import imags4 from '../../assets/groupPictures/images3.jpg'
import imags5 from '../../assets/groupPictures/images4.jpg'
import imags6 from '../../assets/groupPictures/images5.jpg'
import imags7 from '../../assets/groupPictures/images6.jpg'
import imags8 from '../../assets/groupPictures/images7.jpg'
import imags9 from '../../assets/groupPictures/20120605164048-0_0.jpg'

const ImageGallery = () => {
    const mit = [
        imags, imags2, imags3, imags4, imags5, imags6, imags7, imags8
    ];

    const yale = [
        imags9, imags6, imags3, imags2, imags, imags8, imags1, imags6
    ];

    const Princeton = [
        imags4, imags3, imags6, imags3, imags3, imags5, imags1, imags9, imags, imags4
    ]

    return (
        <div>
            <h1 className="text-center text-5xl my-10"> Image gallery </h1>
            <>
                <h1>Massachusetts Institute of Technology (MIT) graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto my-10">
                    <div className="flex overflow-x-auto">
                        {mit.map((image, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-64 h-48 object-cover rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1>Yale University graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto my-10">
                    <div className="flex overflow-x-auto">
                        {yale.map((image, index) => (
                            <div key={index} className="flex-shrink-0 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-64 h-48 object-cover rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </>
            <>
                <h1>Princeton University graduate&apos;s group pictures.
                </h1>
                <div className="container mx-auto my-10">
                    <div className="flex overflow-x-auto">
                        {Princeton?.map((image, index) => (
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