import "./navBarBg.css";
import NavBar from "../navBar/NavBar";
import { useEffect, useContext } from 'react'; 
import { useLocation } from "react-router-dom";
import { SpinnerContext } from "../../context/spinnerContext";
import waitAllImagesCharged from "../../utils/waitAllImagesCharged";
import { Link } from "react-router-dom";

function NavBarBg() {

    const {showSpinner} = useContext(SpinnerContext)
    const thisLocation = useLocation();
    
    useEffect(() => {

        /***************************************** Wait images ***************************************/
                                                         
        const checkImages = async () => {
            const componentsToWaitImages = document.querySelectorAll(".componentToWaitImages");
            for (const component of componentsToWaitImages) {
                component.classList.remove("opacityOnCharge");          //Por si queremos incluir el navbar o el footer en el "opacityOnCharge" ya que estos componentes no se refrescan al
            }                                                           // cambiar de pagina y siguen con el primer "opacityOnCharge" que se les asignó por codigo
            showSpinner(true);
            await waitAllImagesCharged();
            showSpinner(false);
            for (const component of componentsToWaitImages) {
                component.classList.add("opacityOnCharge");
            }
        }
        checkImages();
                
        /***************************************** OoS ***************************************/

        const footer : HTMLElement | null = document.querySelector(".footerCont2");       //Removemos OoSS para que se vuelva a hacer el efecto de "opacity on scroll" al cambiar de página
        footer?.classList.remove("OoSS");

        const OoS = () => {
            const OoSElements: NodeListOf<HTMLElement> = document.querySelectorAll(".OoS");
            OoSElements.forEach((element) => {                      //Mostramos el elemento cuando aparece su primer mitad
                if (((element.getBoundingClientRect().top) <= (window.innerHeight - (element.offsetHeight / 2)))) element.classList.add("OoSS");
            })
        }
        window.addEventListener("resize", OoS);
        window.addEventListener("orientationchange", OoS);
        window.addEventListener("scroll", OoS);
        OoS();

        let tempo: any;                                             //Si estamos 1 segundo sin hacer scroll y hay alguna parte de un elemento OoS visible lo mostramos
        const handleTempo = () => {                                 //Se borra el temporizador actual y se crea un nuevo cada vez que hacemos scroll
            clearTimeout(tempo);
            tempo = setTimeout(() => {
                const OoSElements = document.querySelectorAll(".OoS");
                OoSElements.forEach((element) => {
                    if (((element.getBoundingClientRect().top) < (window.innerHeight))) element.classList.add("OoSS");
                })
            }, 500);
        }
        window.addEventListener("resize", handleTempo);
        window.addEventListener("orientationchange", handleTempo);
        window.addEventListener("scroll", handleTempo);
        handleTempo();

        // eslint-disable-next-line
    }, [thisLocation]);    

    return (
        <div className="navBarBgCont flex">
            <Link to="/" className="navBarBgLogoImgCont"><img src="/images/logos/logom.png" alt="Caternorte Logo" className="navBarBgLogoImg"/></Link>
            <NavBar/>
            <div className="navBarBgContactCont flex">
                <div className="navBarBgContactWs flex">
                    <img src="/images/icons/ws.png" alt="" className="navBarBgContactImg"/>
                    <p>11 3471-3398</p>
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