import "./wsFloating.css";
import { gtag_report_conversion } from "../../ads/contact";

function WsFloating() {
    return (
        <a href="https://wa.me/+5491134713398" target="_blank" rel="noreferrer" className="wsFloatingCont OoS" onClick={gtag_report_conversion}>
            <img src="/images/icons/wsfloating.png" alt="Caternorte Whatsapp Floating" className="wsFloating"/>
        </a>
    )
}

export default WsFloating