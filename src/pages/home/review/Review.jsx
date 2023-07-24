import axios from "axios";
import { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });
    }, []);

    return (
        <div>
            <h1> Review part and feedback</h1>
            <div className="container text-center mx-auto my-10">
                <h2 className="text-2xl font-semibold mb-4">College Reviews</h2>
                <div className="grid gap-4 md:gap-20 md:ml56 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-4 border border-gray-300 rounded shadow-md">
                            <h3 className="text-lg font-semibold mb-2">{review.collegeName}</h3>
                            <p>{review.reviewText}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Review;