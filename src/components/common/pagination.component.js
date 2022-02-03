import _ from 'lodash';

import React, { Component } from 'react';

class Pagination extends Component {
    state = {};

    render() {
        const { totalItems, itemsPerPage, activePage, onClickPage } =
            this.props;

        if (totalItems <= itemsPerPage) return null;

        const totalPage = Math.ceil(totalItems / itemsPerPage);
        const pages = _.range(1, totalPage + 1, 1);

        return (
            <>
                <nav>
                    <ul
                        className="pagination flex-wrap justify-content-center"
                        style={{ gap: '2px' }}
                    >
                        <li
                            className={
                                activePage === 1
                                    ? 'page-item disabled'
                                    : 'page-item'
                            }
                        >
                            <button
                                className="page-link"
                                onClick={() => onClickPage(activePage - 1)}
                            >
                                Previous
                            </button>
                        </li>

                        {pages.map((pageNumber) => {
                            return (
                                <li
                                    key={pageNumber}
                                    className={
                                        pageNumber === activePage
                                            ? 'page-item active'
                                            : 'page-item'
                                    }
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => onClickPage(pageNumber)}
                                    >
                                        {pageNumber}
                                    </button>
                                </li>
                            );
                        })}

                        <li
                            className={
                                activePage === pages.length
                                    ? 'page-item disabled'
                                    : 'page-item'
                            }
                        >
                            <button
                                className="page-link"
                                onClick={() => onClickPage(activePage + 1)}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Pagination;
