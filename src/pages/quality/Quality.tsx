import "./quality.css";

function Quality() {
  
    const showDescription = (e: React.BaseSyntheticEvent) => {
        e.target.lastChild.classList.remove("hiddenCardQualityDescription");
        e.target.lastChild.classList.add("showCardQualityDescription");
    }

    const hiddenDescription = (e: React.BaseSyntheticEvent) => {
        e.target.lastChild.classList.remove("showCardQualityDescription");
        e.target.lastChild.classList.add("hiddenCardQualityDescription");
    }

    return (
        <div className="seccions qualitySeccion flex column">

            <img src="/images/quality/bgmin.jpg" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter"></div>
          
            <div className="qualityIntroCont flex column OoS">
                <p className="qualityIntro1">
                    Nuestros metales son producidos bajo las normas internacionales que nos exigen nuestros clientes, como por ejemplo ASTM A48-41, ASTM A536, norma SAE J431 y otras.
                    
                </p>
                <p className="qualityIntro2">
                    Para ello, y para producir materiales de calidad, contamos con un laboratorio que posee los equipos necesarios a tal fin. A saber:
                </p>
            </div>

            <div className="qualityCardsCont flex">
                <div className="qualityCardsIzqCont flex column OoS">
                    <p className="qualityTypes flex">
                        Medición de metales
                    </p>
                    <div className="qualityCardCont" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/durometro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Durometro ROCKWELL</p> 
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Durometro ROCKWELL B y C: equipo para determinar durezas en dichas escalas de los aceros.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/pirometro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Pirómetro de inmersión</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Equipo para determinar las temperaturas tanto de hornos como de coladas de las piezas</p>
                        </div>
                    </div>
                </div>
                <div className="qualityCardsDerCont flex column OoS">
                    <p className="qualityTypes flex">
                        Medición de tierras
                    </p>
                    <div className="qualityCardCont" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/phmetro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">PHmetro</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Este equipo nos proporciona el pH (acidez) de las tierras de moldeo</p>
                        </div>
                    </div>
                    <div className="qualityCardCont" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/permeametro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Permeámetro</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Nos proporciona la capacidad de evacuar gases en las tierras de moldeo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality