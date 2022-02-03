import React from 'react';

const TableHeader = ({ columns, sortingProps, onSort }) => {
    const handleSort = ({ key, isSortable }) => {
        if (!isSortable) return null;

        if (sortingProps.key === key) {
            if (sortingProps.order === 'asc') {
                onSort({ key, order: 'desc' });
            } else {
                onSort({ key, order: 'asc' });
            }
        } else {
            onSort({ key, order: 'asc' });
        }
    };

    const getSortingIcon = (item, sortingProps) => {
        if (sortingProps.key === item.key) {
            if (sortingProps.order === 'asc') {
                return (
                    <i
                        className="bi bi-sort-down"
                        style={{ cursor: 'pointer' }}
                    />
                );
            } else {
                return (
                    <i
                        className="bi bi-sort-down-alt"
                        style={{ cursor: 'pointer' }}
                    />
                );
            }
        } else return null;
    };

    return (
        <>
            <thead>
                <tr>
                    {columns.map((item) => (
                        <th
                            scope="col"
                            key={item.label}
                            onClick={() => handleSort(item)}
                            style={
                                item.isSortable ? { cursor: 'pointer' } : null
                            }
                        >
                            {item.label} {getSortingIcon(item, sortingProps)}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;
