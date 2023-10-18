import "./footer.css";

function Footer() {
    return (
        <div className="footerCont flex">
            <img src="/images/backgrounds/bg2.png" alt="Caternorte Footer Backgroubnd" className="footerBg"/>

            <div className="footerContIzq flex">
                <img src="/images/logos/logo2.png" alt="Caternorte Logo" className="footerLogo"/>
            </div>
            
            <div className="footerContDer flex column">
                <div className="footerDatosCont flex">
                    <img src="/images/icons/phone.png" alt="Caternorte Phones Icon" className="footerIcons" />
                    <p className="footerTextos">4769-3596 &nbsp; 4841-3952</p>
                </div>
                <a className="footerDatosCont flex" href="https://wa.me/+5491134713398">
                    <img src="/images/icons/ws.png" alt="Caternorte Whatsapp Icon" className="footerIcons" />
                    <p className="footerTextos">+54 911 34713398</p>
                </a>
                <a className="footerDatosCont flex" href="mailto: info.carternorte@gmail.com">
                    <img src="/images/icons/email.png" alt="Caternorte Email Icon" className="footerIcons footerEmailIcon" />
                    <p className="footerTextos">info.caternorte@gmail.com</p>
                </a>
                <a className="footerDatosCont flex" href="https://maps.app.goo.gl/esH5A9nVQK4FTpv3A" target="_blank" rel="noreferrer">
                    <img src="/images/icons/location.png" alt="Caternorte Location Icon" className="footerIcons" />
                    <p className="footerTextos">Belgrano 6025, Loma Hermosa</p>
                </a>
                <div className="footerDatosCont flex">
                    <img src="/images/icons/schedules.png" alt="Caternorte Schedules Icon" className="footerIcons" />
                    <p className="footerTextos">Lunes a Viernes de 8 a 12 y de 13 a 16hs</p>
                </div>
            </div>
           
        </div>
    )
}

export default Footer