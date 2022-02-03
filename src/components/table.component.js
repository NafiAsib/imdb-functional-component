import React from 'react';

import TableBody from './common/table-body.component';
import TableHeader from './common/table-header.component';

const Table = ({ items, columns, sortingProps, onSort }) => {
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
};

export default Table;
