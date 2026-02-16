import React from 'react';
import { Camera } from 'lucide-react';

const MobileScan: React.FC = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                width: '80%',
                height: '60%',
                border: '2px dashed #444',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                position: 'relative'
            }}>
                <Camera size={48} color="#666" />
                <div style={{ position: 'absolute', bottom: '20px', fontSize: '0.9rem', color: '#888' }}>
                    Align sketch within frame
                </div>
            </div>
            <button style={{
                padding: '15px 40px',
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '30px',
                fontWeight: 'bold',
                border: 'none',
                fontSize: '1rem'
            }}>
                Take Photo
            </button>
        </div>
    );
};

export default MobileScan;
