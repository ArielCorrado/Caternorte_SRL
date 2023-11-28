import "./footer.css";

function Footer() {
    return (
        <div className="footerCont flex">
            <img src="/images/backgrounds/bg3.webp" alt="Caternorte Footer Backgroubnd" className="footerBg"/>
            <div className="footerCont2 OoS flex">
                <div className="footerContIzq flex">
                    <img src="/images/logos/logom2.png" alt="Caternorte Logo" className="footerLogo"/>
                </div>
                
                <div className="footerContDer">
                    <a className="footerDatosCont footerDatosContPhone flex" href="tel:01147693596">
                        <img src="/images/icons/phone.png" alt="Caternorte Phones Icon" className="footerIcons" />
                        <p className="footerTextos">(011) 4769-3596 &nbsp; 4841-3952</p>
                    </a>
                    <a className="footerDatosCont footerDatosContMail flex" href="mailto:info@caternorte.com.ar">
                        <img src="/images/icons/email.png" alt="Caternorte Email Icon" className="footerIcons footerEmailIcon" />
                        <p className="footerTextos">info@caternorte.com.ar</p>
                    </a>
                    <a className="footerDatosCont footerDatosContWs flex" href="https://wa.me/+5491134713398" target="_blank" rel="noreferrer">
                        <img src="/images/icons/ws.png" alt="Caternorte Whatsapp Icon" className="footerIcons" />
                        <p className="footerTextos">+54 911 3471-3398</p>
                    </a>
                    <a className="footerDatosCont footerDatosContLocation flex" href="https://maps.app.goo.gl/esH5A9nVQK4FTpv3A" target="_blank" rel="noreferrer">
                        <img src="/images/icons/location.png" alt="Caternorte Location Icon" className="footerIcons" />
                        <p className="footerTextos">Belgrano 6025, Loma Hermosa</p>
                    </a>
                    <div className="footerDatosCont footerDatosContSchedules flex">
                        <img src="/images/icons/schedules.png" alt="Caternorte Schedules Icon" className="footerIcons" />
                        <p className="footerTextos">Lunes a Viernes de 8 a 12 y de 13 a 16hs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer