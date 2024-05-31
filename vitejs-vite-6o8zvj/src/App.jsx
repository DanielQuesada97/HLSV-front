import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import QRCodeScanner from "./components/QRCodeScanner.jsx";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/qrcodescanner" element={<QRCodeScanner />} />

            </Routes>
        </Router>
    );
}

export default App;
