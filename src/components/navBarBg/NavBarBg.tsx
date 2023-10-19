import "./navBarBg.css";
import NavBar from "../navBar/NavBar";

function NavBarBg() {

    return (
        <div className="navBarBgCont flex">
            <img src="/images/logos/logom.png" alt="Caternorte Logo" className="navBarBgLogoImg"/>
            <NavBar/>
            <div className="navBarBgContactCont flex">
                <div className="navBarBgContactWs flex">
                    <img src="/images/icons/ws.png" alt="" className="navBarBgContactImg"/>
                    <p>+54 911 3471-3398</p>
                </div>
                <div className="navBarBgContactPhone flex">
                    <img src="/images/icons/phone.png" alt="" className="navBarBgContactImg"/>
                    <p>(011) 4769-0187</p>
                </div>
                <div className="navBarBgContactEmail flex">
                    <img src="/images/icons/email.png" alt="" className="navBarBgContactImg"/>
                    <p>info.carternorte@gmail.com</p>                
                </div>
                <a className="navBarBgContactLocation flex" href="https://maps.app.goo.gl/esH5A9nVQK4FTpv3A" target="_blank" rel="noreferrer">
                    <img src="/images/icons/location.png" alt="" className="navBarBgContactImg"/>
                    <p>Ubicación</p>                
                </a>
            </div>
        </div>
    )
}

export default NavBarBg