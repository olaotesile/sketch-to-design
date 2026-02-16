import React, { useState } from 'react';
import { Home, PenTool, Settings, Layers } from 'lucide-react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <aside
            className={`sidebar ${isHovered ? 'expanded' : 'collapsed'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="sidebar-top">
                <div className="logo-container">
                    {/* Placeholder for Logo */}
                    <div className="logo-icon">
                        <Layers size={24} color="#000" />
                    </div>
                    <span className="logo-text">Rendis</span>
                </div>

                <nav className="nav-menu">
                    <div className="nav-item active">
                        <span className="icon"><Home size={20} /></span>
                        <span className="label">Home</span>
                    </div>
                    <div className="nav-item">
                        <span className="icon"><PenTool size={20} /></span>
                        <span className="label">Workbench</span>
                    </div>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <div className="nav-item">
                    <span className="icon"><Settings size={20} /></span>
                    <span className="label">Settings</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
