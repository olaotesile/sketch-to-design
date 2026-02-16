import React, { useState, useRef } from 'react';
import { Send, Upload } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import './PromptInput.css';

interface PromptInputProps {
    onSend?: () => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSend }) => {
    const [mode, setMode] = useState<'2D' | '3D'>('2D');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const scanUrl = `${window.location.origin}/scan`;
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('File selected:', file.name);
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleSend = () => {
        if (selectedFile) {
            console.log("Proceeding with file:", selectedFile.name);
            if (onSend) {
                onSend();
            }
        }
    };

    return (
        <div className="prompt-input-container">
            <div className="central-content">

                <div className="action-cards">
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <button
                        className={`action-card ${selectedFile ? 'file-selected' : ''}`}
                        onClick={handleUploadClick}
                    >
                        {previewUrl ? (
                            <div className="image-preview-container">
                                <img src={previewUrl} alt="Preview" className="image-preview" />
                                <div className="preview-overlay">
                                    <span>Change</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Upload size={32} />
                                <span>Upload Sketch</span>
                            </>
                        )}
                    </button>
                    <div className="qr-code-container">
                        <QRCodeCanvas value={scanUrl} size={100} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} />
                    </div>
                </div>

                <div className="mode-toggle-container">
                    <button
                        className={`mode-toggle-btn ${mode === '2D' ? 'active' : ''}`}
                        onClick={() => setMode('2D')}
                    >
                        2D Path
                    </button>
                    <button
                        className={`mode-toggle-btn ${mode === '3D' ? 'active' : ''}`}
                        onClick={() => setMode('3D')}
                    >
                        3D Path
                    </button>
                </div>

                <div className="prompt-input-wrapper">
                    <input
                        type="text"
                        placeholder="Add additional text to your sketch"
                        className="prompt-input"
                    />
                    <button
                        className={`send-button ${!selectedFile ? 'disabled' : ''}`}
                        onClick={handleSend}
                        disabled={!selectedFile}
                    >
                        <Send size={18} color={selectedFile ? "#fff" : "#888"} />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PromptInput;
