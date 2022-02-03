import React from 'react';

const TableBody = ({ items, columns }) => {
    return (
        <tbody>
            {items.map((item) => {
                return (
                    <tr key={item.id}>
                        {columns.map((data) => (
                            <React.Fragment key={item.id + ' ' + data.label}>
                                {data.content(item, data.key)}
                            </React.Fragment>
                        ))}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;
