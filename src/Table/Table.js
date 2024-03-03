import React, { useState } from 'react';


const Table = ({ data }) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortAsc, setSortAsc] = useState(true);

    const handleSort = (key) => {
        if (sortBy === key) {
            setSortAsc(!sortAsc);
        } else {
            setSortBy(key);
            setSortAsc(true);
        }
    };

    const sortedData = data.sort((a, b) => {
        if (sortBy) {
            if (sortAsc) {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
        }
        return 0;
    });

    return (
        <div>
            <button onClick={() => handleSort('date')}>Sort by Date</button>
            <button onClick={() => handleSort('views')}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th >Date</th>
                        <th >Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.views}</td>
                            <td>{item.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
};

export default Table;