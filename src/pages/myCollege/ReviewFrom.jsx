// ReviewForm.js
import { useState } from 'react';

const ReviewForm = () => {
    const [review, setReview] = useState('');


    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);
        // Send the review to the backend (You will need to implement the backend API to handle the review data)

        // After sending the review, clear the input field
        setReview('');
    };

    return (
        <form onSubmit={handleSubmit} className="container mx-auto my-10 max-w-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                    Review
                </label>
                <textarea
                    id="review"
                    className="appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    placeholder="Write your review here"
                    value={review}
                    onChange={handleReviewChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;
