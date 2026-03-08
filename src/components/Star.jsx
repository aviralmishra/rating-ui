const Star = ({ star, rating, hover, color, onStarClick, onStarHover }) => {
    return (
        <span
            key={star}
            style={{ color: star <= (hover || rating) ? color : 'lightgrey' }}
            onClick={() => onStarClick(star)}
            onMouseEnter={() => onStarHover(star)}
            onMouseLeave={() => onStarHover(0)}
        >
            {'\u2605'}
        </span>
    );
};

export default Star;
