import { Link } from "react-router-dom";

import { FiHome, FiDollarSign } from 'react-icons/fi'
import { LuTable2 } from "react-icons/lu";
import { CiFileOn } from "react-icons/ci";
import { IoChatboxOutline, IoServerOutline, IoSettingsOutline } from "react-icons/io5"
import { TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";

function Sidebar() {
    const [current, setCurrent] = useState('/');
    const handleClick = (path) => {
        setCurrent(path);
    }
    return (
        <div className="sidebar">
            <Link
                to="/"
                className={current === '/' ? 'active' : ''}
                onClick={() => handleClick('/')}
            >
                <FiHome className="sidebar-icons" /> Home
            </Link>
            <Link
                to="/charts"
                className={current === '/charts' ? 'active' : ''}
                onClick={() => handleClick('/charts')}
            >
                <LuTable2 className="sidebar-icons" /> Charts
            </Link>
            <Link
                to="/file-manager"
                className={current === '/file-manager' ? 'active' : ''}
                onClick={() => handleClick('/file-manager')}
            >
                <CiFileOn className="sidebar-icons" /> File Manager
            </Link>
            <Link
                to="/team-chat"
                className={current === '/team-chat' ? 'active' : ''}
                onClick={() => handleClick('/team-chat')}
            >
                <IoChatboxOutline className="sidebar-icons" /> Team Chat
            </Link>
            <Link
                to="/advertise"
                className={current === '/advertise' ? 'active' : ''}
                onClick={() => handleClick('/advertise')}
            >
                <FiDollarSign className="sidebar-icons" /> Advertise
            </Link>
            <Link
                to="/domain"
                className={current === '/domains' ? 'active' : ''}
                onClick={() => handleClick('/domains')}
            >
                <IoServerOutline className="sidebar-icons" /> Domains
            </Link>
            <Link
                to="/settings"
                className={current === '/settings' ? 'active' : ''}
                onClick={() => handleClick('/settings')}
            >
                <IoSettingsOutline className="sidebar-icons" /> Settings
            </Link>
            <Link
                to="/reports"
                className={current === '/reports' ? 'active' : ''}
                onClick={() => handleClick('/reports')}
            >
                <TbReportAnalytics className="sidebar-icons" /> Reports
            </Link>
        </div>
    )
}

export default Sidebar
