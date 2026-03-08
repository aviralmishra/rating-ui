import { useState } from 'react';

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const stars = Array.from({ length: 5 }, (_, i) => i + 1);
    const messages = ['Ok', 'Good', 'Very good', 'Excellent', 'Outstanding'];

    return (
        <div className="rating-container">
            <h2>Rate your experience...</h2>
            <div className="stars">
                {stars.map((star) => (
                    <span
                        key={star}
                        className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseExit={() => setHover(0)}
                    >
                        {'\u2605'}
                    </span>
                ))}
            </div>
            <div>{rating > 0 && messages[rating - 1]}</div>
        </div>
    );
};

export default Rating;
