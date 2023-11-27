import "./foundry.css";

function Foundry () {
  
    return (
        <div className="seccions qualitySeccion componentToWaitImages flex column">

            <img src="/images/backgrounds/pulleys2.webp" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter pulleysBgFilter"></div>
          
            <div className="qualityIntroCont flex column OoS">
                <p className="pulleysIntro0">
                    Fundición
                </p>
                <p className="productsIntro1"><span className="pulleysTriangle">&#8227;</span>Realizamos pequeñas, medianas y grandes series con la capadicad de fundir desde 500gr hasta 120kg en fundición gris, nodular y acero</p>
            </div>

            <div className="qualityCardsCont flex">
                <div className="qualityCardsIzqCont foundryCardsIzqCont flex wrap">
                    <p className="qualityTypes qualityTypesIzq foundryTypesIzq OoS flex">
                        Piezas de fundición
                    </p>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/3.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/7.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/5.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/6.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/4.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/8.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont foundryCardCont OoS">
                        <img src="/images/products/foundry/9.jpg" alt="Pieza de fundición" className="qualityCardImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foundry;