import React, { Component } from 'react';

class Rating extends Component {
    state = {
        isMouseOver: false,
    };

    handleMouseOver = () => {
        this.setState({ isMouseOver: true });
    };

    handleMouseOut = () => {
        this.setState({ isMouseOver: false });
    };

    getClassName = () => {
        const { isFavourite } = this.props;
        const { isMouseOver } = this.state;
        let className = isFavourite ? 'bi bi-star-fill' : 'bi bi-star';
        className += isMouseOver ? ' text-primary' : '';
        return className;
    };

    render() {
        const { handleToggleFavourite, id } = this.props;

        return (
            <td>
                <i
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={() => handleToggleFavourite(id)}
                    className={this.getClassName()}
                    style={{ cursor: 'pointer' }}
                />
            </td>
        );
    }
}

export default Rating;
