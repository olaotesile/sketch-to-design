import React, { useState } from 'react';
import Greeting from '../Greeting';
import PromptInput from '../PromptInput';
import './Workspace.css';
import { Loader2, Download } from 'lucide-react';

const Workspace: React.FC = () => {
    const [hasSent, setHasSent] = useState(false);
    const [isGenerated, setIsGenerated] = useState(false); // Simulated generation done

    const handleSend = () => {
        setHasSent(true);
        // Simulate generation delay
        setTimeout(() => {
            setIsGenerated(true);
        }, 3000);
    };

    return (
        <div className={`workspace-container ${hasSent ? 'split-view' : 'centered-view'}`}>
            <div className="left-panel">
                <div className="left-content-wrapper">
                    {!hasSent && <Greeting name="Olamiposi" />}
                    <PromptInput onSend={handleSend} />
                </div>
            </div>

            <div className="right-panel">
                {hasSent && (
                    <div className="result-container">
                        {!isGenerated ? (
                            <div className="loading-state">
                                <Loader2 className="spinner" size={48} />
                                <p>Rendering your design...</p>
                            </div>
                        ) : (
                            <div className="generated-result">
                                <div className="result-placeholder">
                                    {/* Placeholder for 3D Viewer or Result Image */}
                                    <div className="cube-mockup"></div>
                                </div>
                                <button className="download-btn">
                                    <Download size={20} />
                                    Download Render
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Workspace;
