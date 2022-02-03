import React, { useState } from 'react';

const Rating = ({ isFavourite, handleToggleFavourite, id }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setIsMouseOver(true);
    };

    const handleMouseOut = () => {
        setIsMouseOver(false);
    };

    const getClassName = () => {
        let className = isFavourite ? 'bi bi-star-fill' : 'bi bi-star';
        className += isMouseOver ? ' text-primary' : '';
        return className;
    };

    return (
        <td>
            <i
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={() => handleToggleFavourite(id)}
                className={getClassName()}
                style={{ cursor: 'pointer' }}
            />
        </td>
    );
};

export default Rating;
