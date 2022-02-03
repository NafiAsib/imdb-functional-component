import React, { Component } from 'react';
import TableBody from './common/table-body.component';
import TableHeader from './common/table-header.component';

class Table extends Component {
    state = {};

    render() {
        const { items, columns, sortingProps, onSort } = this.props;
        return (
            <>
                <table className="table table-hover">
                    <TableHeader
                        columns={columns}
                        sortingProps={sortingProps}
                        onSort={onSort}
                    />
                    <TableBody items={items} columns={columns} />
                </table>
            </>
        );
    }
}

export default Table;
