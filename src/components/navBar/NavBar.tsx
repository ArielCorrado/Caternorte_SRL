import { useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import "./navBar.css";

const NavBar = () => {

    const thisLocation = useLocation();

    useEffect(() => {       //Al cambiar de pagina el scroll se va arriba
        window.scrollTo({top: 0})
    }, [thisLocation])
            
    useEffect(() => {

        const iconoMenu = document.querySelector(".iconoMenu");
        const navBarFilter = document.querySelector(".navBarFilter");
        iconoMenu?.setAttribute("name", "iconoMenu");
        const menu = document.querySelector(".menu");
        menu?.setAttribute("name", "menu")
        const opciones = document.getElementsByClassName("opcion");
        let initialWidth = window.innerWidth;
        let REM: number;
        let breakPoint: number = 0;
        let menuBajo = false;
        let flagEnterMenuToggle = true;
        iconoMenu?.addEventListener("click", () => {                         //Manejo de clases para bajar y subir menu
            if (flagEnterMenuToggle) {
                flagEnterMenuToggle = false;
                if (!menuBajo) {
                    menu?.classList.remove("menuSube", "menuBaja");
                    menu?.classList.add("menuBaja");
                    navBarFilter?.classList.add("displayOn");
                    menuBajo = !menuBajo;    
                    const animations = menu?.getAnimations() as Animation[];
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                } else {
                    menu?.classList.remove("menuBaja", "menuSube");
                    menu?.classList.add("menuSube");
                    navBarFilter?.classList.remove("displayOn");
                    menuBajo = !menuBajo;  
                    const animations = menu?.getAnimations() as Animation[];
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                }
            }
        })

        const calcularREM = () => {
            if (window.innerWidth >= window.innerHeight) REM = 0.01 * window.innerHeight + 10;
            if (window.innerWidth < window.innerHeight) REM = 0.01 * window.innerWidth + 10;
            breakPoint = 55 * REM;
        }
         
        calcularREM();
        if(window.innerWidth < breakPoint) {                                        //Cargamos página con un ancho menor a BreakPoint
            menu?.classList.add("iconoMenuON", "menuOFF");
            iconoMenu?.classList.add("iconoMenuON");
            for (const opcion of opciones) {
                opcion.classList.add("opcion2");
            }
        }
        
        const check = () => {
            calcularREM();           
            if(initialWidth <= breakPoint && window.innerWidth > breakPoint) {                   //Pasamos de un ancho de pantalla menor a breakPoint a uno mayor
                menu?.classList.remove("menuSube", "menuBaja", "menuOFF");
                navBarFilter?.classList.remove("displayOn");
                iconoMenu?.classList.remove("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.remove("opcion2");
                }
                menuBajo = false;
                initialWidth = window.innerWidth;
            }     
            if(initialWidth > breakPoint && window.innerWidth < breakPoint) {                   //Pasamos de un ancho de pantalla mayor a breakPoint a uno menor
                menu?.classList.add("menuOFF");
                iconoMenu?.classList.add("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.add("opcion2");
                }
                initialWidth = window.innerWidth;
            }     
        }        

        window.addEventListener("resize", () => check());                                        //Manejo de clases al hacer resize o cambio de orientacion
        check();

        window.addEventListener("click", (e) => {                                               //Cerramos en menu desplegado al hacer click en cualquier lado menos en el icono de menu
            const sameElement = e.target as HTMLElement
            if (sameElement.getAttribute("name") !== "iconoMenu" && menuBajo === true) {
                menu?.classList.remove("menuBaja", "menuSube");
                navBarFilter?.classList.remove("displayOn");
                menuBajo = false;
            }
        })
                
        // eslint-disable-next-line
    }, []);    
    
    return (
        <>
            <div className="navBarFilter"></div>
            <div className="contMenu flex opacityOnCharge">
                {/* <div className="navBarContLogoEidioma flex">
                    <Link to="/" className="navBarContLogo flex"><img src="/images/logos/logo.png" alt="Logo Los Tobianos" className="navBarLogo" /></Link>
                </div> */}
                <img className="iconoMenu" src="/images/icons/menu.png" alt="Icono Menu"/>
                <div className="tapaMenu"></div>
                <div className="menu flex">
                    <img src="/images/logos/logom.png" alt="Caternorte Logo" className="navBarLogo"/>
                    <HashLink className="opcion flex" to="/">Empresa</HashLink>
                    <HashLink className="opcion flex" to="/">Fundicion</HashLink>
                    <HashLink className="opcion flex" to="/">Poleas</HashLink>
                    <HashLink className="opcion flex" to="/">Clientes</HashLink>
                    <HashLink className="opcion flex" to="/">Calidad</HashLink>
                    <HashLink className="opcion flex" to="/">Contacto</HashLink>
                </div>
                <div className="sharp"></div>
            </div>
        </>
    )  
}   

export default NavBar;
