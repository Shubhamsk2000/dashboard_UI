import React from 'react';
import { FaCog } from 'react-icons/fa';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
const data = [
  { time: 'MON 00:00', value: 600 },
  { time: 'MON 03:00', value: 350 },
  { time: 'MON 06:00', value: 800 },
  { time: 'MON 09:00', value: 450 },
  { time: 'MON 12:00', value: 700 },
  { time: 'MON 15:00', value: 550 },
  { time: 'MON 18:00', value: 700 },
  { time: 'MON 21:00', value: 400 },
  { time: 'TUE 00:00', value: 650 },
  { time: 'TUE 03:00', value: 500 },
  { time: 'TUE 06:00', value: 400 },
  { time: 'TUE 09:00', value: 800 },
  { time: 'TUE 12:00', value: 750 },
  { time: 'TUE 15:00', value: 450 },
  { time: 'TUE 18:00', value: 600 },
  { time: 'TUE 21:00', value: 350 },
  { time: 'WED 00:00', value: 700 },
];



function MainDailyTrend() {
  return (
    <div className="main-daily-trend-container">
        <FaCog className='setting-icon' />
      <h2 className="main-daily-trend-title">Main Daily Trend</h2>
      <p className="main-daily-trend-subtitle">CPU Power • Last 48 Hours</p>
      <p><span className="stat-num">3721</span> MHZ</p>
      <span className="down">↓ 1.29%</span>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          {/* <XAxis dataKey="time" tick={{ fill: '#fff' }} /> */}
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default MainDailyTrend;
