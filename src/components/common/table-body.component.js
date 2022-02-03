import React, { Component } from 'react';

class TableBody extends Component {
    render() {
        const { items, columns } = this.props;

        return (
            <tbody>
                {items.map((item) => {
                    return (
                        <tr key={item.id}>
                            {columns.map((data) => (
                                <React.Fragment
                                    key={item.id + ' ' + data.label}
                                >
                                    {data.content(item, data.key)}
                                </React.Fragment>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        );
    }
}

export default TableBody;
