import { useState } from 'react';

import Star from './Star';
import Modal from './Modal';
import Button from './Button';

const Rating = ({ heading = 'Rate your experience...' }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const messages = ['Ok', 'Good', 'Very good', 'Excellent', 'Outstanding'];

    const handleSubmit = () => {
        if (rating > 0) {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
    };

    return (
        <div className="rating-container">
            <h2>{heading}</h2>
            <div className="stars">
                {stars.map((star) => (
                    <Star
                        key={star}
                        star={star}
                        rating={rating}
                        hover={hover}
                        color={'purple'}
                        onStarClick={setRating}
                        onStarHover={setHover}
                    ></Star>
                ))}
            </div>
            <div className="feedback">{rating > 0 && messages[rating - 1]}</div>
            <div>
                <Button
                    className="submit-btn"
                    onClick={handleSubmit}
                    disabled={rating === 0}
                >
                    Submit
                </Button>
            </div>
            <Modal
                isOpen={submitted}
                onClose={closeModal}
                rating={rating}
            />
        </div>
    );
};

export default Rating;
