import React from 'react';
import { FaUsers, FaCog, FaExclamationTriangle } from 'react-icons/fa';
import { TbActivityHeartbeat } from "react-icons/tb";
import { FiBarChart2 } from "react-icons/fi";
import { IoServerOutline } from "react-icons/io5"

function OverallOverview() {
    return (
        <div className="overall-overview">
            <div className="header">
                <h2>Overall Overview</h2>
                <p>During the last 30 days, the peak volume is 8713</p>
            </div>
            <div className="stats">
                <div className="stat">
                    <TbActivityHeartbeat className='overall-icons uptime-icon' />
                    <h3>Uptime</h3>
                    <p><span className="stat-num">97.6</span> %</p>
                    <span className="up">↑ 4.56%</span>
                </div>
                <div className="stat">
                    <FaUsers className='overall-icons users-icon' />
                    <h3>Users</h3>
                    <p className="stat-num">1000</p>
                    <span className="up">↑ 13.84%</span>
                </div>
                <div className="stat">
                    <FiBarChart2 className='overall-icons traffic-icon' />
                    <h3>Network Traffic</h3>
                    <p><span className="stat-num">512</span> mb/s</p>
                    <span className="down">↓ 7.18%</span>
                </div>
                <div className="stat">
                    <FaCog className='overall-icons produced-icon' />
                    <h3>Produced</h3>
                    <p className="stat-num">5,26K</p>
                    <span className="down">↓ 3.26%</span>
                </div>
                <div className="stat server-stat">
                    <IoServerOutline className='overall-icons server-icon' />
                    <h3>Server Status</h3>
                    <p className="stat-num">Idle</p>
                </div>
                <div className="stat">
                    <FaExclamationTriangle className='overall-icons flow-icon' />
                    <h3>Operational flow</h3>
                    <p className="stat-num">3824</p>
                </div>
            </div>


        </div>
    );
};

export default OverallOverview;
