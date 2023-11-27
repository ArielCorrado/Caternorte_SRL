import "./cones.css";

function Cones () {
  
    return (
        <div className="seccions qualitySeccion componentToWaitImages flex column">

            <img src="/images/backgrounds/pulleys2.jpg" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter pulleysBgFilter"></div>
          
            <div className="qualityIntroCont flex column OoS">
                <p className="pulleysIntro0">
                    Conos
                </p>
                <p className="productsIntro1">
                    <span className="pulleysTriangle">&#8227;</span> 
                    <span className="conesIntro1Text">Fabricamos conos QD. </span>
                    <a href="/datasheets/qd.jpg" target="_blank" className="conesIntro1Text conesIntro1Link">Ver Catálogo</a>
                </p>
                <p className="productsIntro1">
                    <span className="pulleysTriangle">&#8227;</span> 
                    <span className="conesIntro1Text">Y conos Tapperlock. </span>
                    <a href="/datasheets/tapperlock.jpeg" target="_blank" className="conesIntro1Text conesIntro1Link">Ver Catálogo</a>
                </p>
            </div>

            <div className="qualityCardsCont flex">
                <div className="qualityCardsIzqCont flex wrap">
                    <p className="qualityTypes qualityTypesIzq OoS flex">
                        Conos QD
                    </p>
                    <div className="qualityCardCont pulleysCardCont OoS">
                        <img src="/images/products/cones/1.jpg" alt="Cono" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont OoS">
                        <img src="/images/products/cones/2.jpg" alt="Cono" className="qualityCardImg" />
                    </div>
                </div>
                <div className="qualityCardsDerCont flex wrap">
                    <p className="qualityTypes qualityTypesDer OoS flex">
                        Conos Tapperlock
                    </p>
                    <div className="qualityCardCont pulleysCardCont OoS">
                        <img src="/images/products/cones/3.jpg" alt="Cono" className="qualityCardImg" />
                    </div>
                    <div className="qualityCardCont pulleysCardCont OoS">
                        <img src="/images/products/cones/4.jpg" alt="Cono" className="qualityCardImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cones;