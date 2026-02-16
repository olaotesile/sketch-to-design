import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Workspace from './components/pages/Workspace';
import MobileScan from './components/pages/MobileScan';
import './styles/variables.css';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <MainLayout>
                        <Workspace />
                    </MainLayout>
                } />
                <Route path="/scan" element={<MobileScan />} />
            </Routes>
        </Router>
    );
}

export default App;
