import '../scss/main.scss';
import '../scss/QRCodeScanner.scss'

const QRCodeScanner = () => {
    return (
        <div className="gradient-background">
            <div className="container">
                <div className="qr-code-scanner">
                    <div className="qr-code-box">
                        <div className="qr-code">
                            <img src="path/to/qr-code.png" alt="QR Code"/>
                            <div className="check-mark">✔️</div>
                        </div>
                    </div>
                    <button className="scan-button">Escanear</button>
                </div>

                <div className="authentication-result">
                    <div className="header">
                        <span className="time">11:33 AM</span>
                        <span className="date">Viernes 5 de Mayo</span>
                    </div>
                    <div className="result-box">
                        <h2>Autenticación Exitosa</h2>
                        <div className="details">
                            <p><strong>Residente</strong></p>
                            <p>User: Jhon Doe</p>
                            <p>Estado de pago: Al día</p>
                            <p>Contact: +5037549</p>
                            <p>Residencial: #6-7</p>
                        </div>
                    </div>
                    <div className="powered-by">
                        Powered by <strong>RocketStudios</strong>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default QRCodeScanner;
