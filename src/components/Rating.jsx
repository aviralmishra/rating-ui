import { useState } from 'react';
import Star from './Star';

const Rating = ({ heading = 'Rate your experience...' }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const messages = ['Ok', 'Good', 'Very good', 'Excellent', 'Outstanding'];

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
            <div>{rating > 0 && messages[rating - 1]}</div>
        </div>
    );
};

export default Rating;
