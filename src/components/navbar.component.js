import React, { Component } from 'react';
class Navbar extends Component {
    state = {};
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-light">
                    <span
                        className="navbar-brand"
                        style={{ marginLeft: '40px' }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                            width="60"
                            height="50"
                            className="d-inline-block align-top"
                            alt="imdb-logo"
                            style={{ objectFit: 'contain' }}
                        />
                    </span>
                </nav>
            </>
        );
    }
}

export default Navbar;
