import "./slider.css";

function Slider() {
    return (
        <div className="slider1Cont flex">
            <img src="/images/slider/1.jpg" alt="Caternorte Slider" className="slider1Img"/>
            <div className="slider1TextoCont flex column">
                <p className="slider1Texto1">Fundicion </p>
                <p className="slider1Texto2">De Hierro &#8227; Acero &#8227; Aluminio</p>
                <p  className="slider1Texto3"> 
                    Nuestra misión es ser Líderes en la Distribución 
                    y Transformación de Aceros y Fijaciones para
                    la  industria en el mercado Argentino <br />
                    y mercados regionales.
                </p>
                <p  className="slider1Texto4"> 
                    Nuestra misión es ser Líderes en la Distribución 
                    y Transformación de <br />Aceros y Fijaciones para 
                    la industria <br />en el mercado Argentino 
                    y mercados regionales.
                </p>
                <button className="slider1Button flex">Productos <span className="slider1ButtonSign">&gt;</span></button>
            </div>
        </div>
    )
}

export default Slider