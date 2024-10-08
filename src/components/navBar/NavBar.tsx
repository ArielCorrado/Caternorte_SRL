import { useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {

    const thisLocation = useLocation();

    useEffect(() => {       //Al cambiar de pagina el scroll se va arriba
        window.scrollTo({top: 0})

        /**************************** Cambio dinamico de titulos de paginas ***************************/
                       
        const path = thisLocation.pathname;
        const pagesTitleArr = [
            {path: "/ ", title: "Caternorte. Especialistas en Fundición de Metales"},
            {path: "/infrastructure", title: "Infraestructura"},
            {path: "/products", title: "Productos"},
            {path: "/quality", title: "Calidad"},
            {path: "/contact", title: "Contacto"},
        ]

        const pageData = pagesTitleArr.find((page) => path.includes(page.path));
        document.title = pageData?.title || "Caternorte. Especialistas en Fundición de Metales";
              
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
            breakPoint = 65 * REM;
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
                    <Link to="/" className="navBarLogoCont flex"><img src="/images/logos/logom.png" alt="Caternorte Logo" className="navBarLogo"/></Link>
                    <Link className="opcion flex" to="/"><p>Empresa</p></Link>
                    <Link className="opcion flex" to="/infrastructure"><p>Infraestructura</p></Link>
                    <Link className="opcion flex" to="/products"><p>Productos</p></Link>
                    {/* <HashLink className="opcion flex" to="/"><p>Clientes</p></HashLink> */}
                    <Link className="opcion flex" to="/quality"><p>Calidad</p></Link>
                    <Link className="opcion flex" to="/contact"><p>Contacto</p></Link>
                </div>
                <div className="sharp"></div>
            </div>
        </>
    )  
}   

export default NavBar;
