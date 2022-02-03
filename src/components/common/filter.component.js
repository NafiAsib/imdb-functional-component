import React from 'react';

const Filter = ({ items, selectedGenre, onFilter }) => {
    return (
        <div className="list-group">
            {items.map((item) => {
                return (
                    <button
                        key={item}
                        type="button"
                        className={
                            selectedGenre === item
                                ? 'list-group-item list-group-item-action active'
                                : 'list-group-item list-group-item-action'
                        }
                        onClick={() => onFilter(item)}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};

export default Filter;
