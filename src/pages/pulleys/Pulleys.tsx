import "./pulleys.css";

function Pulleys () {
  
    return (
        <div className="seccions qualitySeccion componentToWaitImages flex column">

            <img src="/images/backgrounds/pulleys2.jpg" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter pulleysBgFilter"></div>
          
            <div className="qualityIntroCont flex column OoS">
                <p className="pulleysIntro0">
                    Poleas
                </p>
                <p className="productsIntro1"><span className="pulleysTriangle">&#8227;</span>Fabricamos poleas estandar secciones "A" "B" "C" desde 50mm hasta 500mm.</p>
                <p className="productsIntro1"><span className="pulleysTriangle">&#8227;</span>También fabricamos poleas especiales de todas las secciones desde 50mm hasta 1300mm.</p>
            </div>

            <div className="qualityCardsCont flex">
                <div className="qualityCardsIzqCont flex wrap">
                    <p className="qualityTypes qualityTypesIzq OoS flex">
                        Poleas estandar
                    </p>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/2.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/6.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/7.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                </div>
                <div className="qualityCardsDerCont flex wrap">
                    <p className="qualityTypes qualityTypesDer OoS flex">
                        Poleas especiales
                    </p>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/3.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/4.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont OoS">
                        <img src="/images/products/pulleys/5.jpg" alt="Polea" className="qualityCardImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pulleys;