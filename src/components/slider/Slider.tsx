import "./slider.css";
import Button1 from "../buttons/Button1";

function Slider() {
    return (
        <div className="slider1Cont flex OoS">
            <img src="/images/slider/2.jpg" alt="Caternorte Slider" className="slider1Img"/>
            <div className="slider1TextoCont flex column">
                <p className="slider1Texto1">Fundicion de metales</p>
                <p className="slider1Texto2">Hierro &#8227; Nodular &#8227; Acero  &#8227; Aluminio</p>
                <p className="slider1Texto3"> 
                    Somos Caternorte, una fundición especializada en la creación de piezas de alta calidad.
                    Nuestra experiencia y compromiso nos distinguen en la industria.
                    Desde componentes industriales hasta obras de arte fundidas, transformamos metal en soluciones que cumplen con los estándares más exigentes.
                    Descubre la magia de la fundición con nosotros.
                </p>
                <p className="slider1Texto4"> 
                    Somos Caternorte, una fundición especializada en la creación de piezas de alta calidad.
                    Nuestra experiencia y compromiso nos distinguen en la industria.
                    Desde componentes industriales hasta obras de arte fundidas, transformamos metal en soluciones que cumplen con los estándares más exigentes.
                    Descubre la magia de la fundición con nosotros.
                </p>
                <Button1 buttonText="Productos" className="button1"/>
            </div>
        </div>
    )
}

export default Slider