import React, { Component } from 'react';

class Filter extends Component {
    state = {};
    render() {
        const { items, selectedGenre, onFilter } = this.props;
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
    }
}

export default Filter;
