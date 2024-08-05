import React from 'react';
import { FiMaximize2 } from "react-icons/fi";
const data = [
    { name: 'NOV 3', hours: 8, time: '48h', fill: '#1c64d2' },
    { name: 'NOV 4', hours: 10, time: '10h', fill: '#348438' },
    { name: 'NOV 5', hours: 4, time: '12h', fill: '#d29513' },
    { name: 'NOV 6', hours: 5, time: '8h', fill: '#1c64d2' },
    { name: 'NOV 7', hours: 9, time: '5h', fill: '#7b7686' },
    { name: 'NOV 8', hours: 2, time: '4h', fill: '#1c64d2' },
    { name: 'NOV 9', hours: 5, time: '2h', fill: '#1c64d2' }
];

function RecentBars() {
    return (
        <div className="recent-bars-container">
            <h2 className="recent-bars-title">Recent bars</h2>
                <FiMaximize2 className='zoom-icon'/>
            <div className="chart">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bar"
                        style={{ '--value': item.hours * 20, '--color': item.fill }}
                        data-label={item.name}
                        data-time={item.time}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default RecentBars;
