import "./quality.css";

function Quality () {
  
    const showDescription = (e: React.BaseSyntheticEvent) => {
        e.target.lastChild.classList.remove("hiddenCardQualityDescription");
        e.target.lastChild.classList.add("showCardQualityDescription");
    }

    const hiddenDescription = (e: React.BaseSyntheticEvent) => {
        e.target.lastChild.classList.remove("showCardQualityDescription");
        e.target.lastChild.classList.add("hiddenCardQualityDescription");
    }

    return (
        <div className="seccions qualitySeccion seccionToWaitImages flex column">

            <img src="/images/backgrounds/qualityb.jpg" alt="Caternorte calidad background" className="qualityBg OoS"/>
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
                <div className="qualityCardsIzqCont flex wrap">
                    <p className="qualityTypes qualityTypesIzq OoS flex">
                        Medición de metales
                    </p>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/microscopio.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Microscopio</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Microscopio metalúrgico: con el cual podemos determinar la estructura y el grafito obtenido en nuestra planta.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/durometro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Durómetro</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Durómetro de pie BRINELL: con el cual determinamos la dureza de los materiales producidos.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/cortadora.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Cortadora</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Cortadora sensitiva PRAZIS: para cortar las probetas las cuales serán analizadas en el microscopio metalúrgico.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/compactador.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Compactador</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Compactador</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/pulidora.jpg" alt="Pulidora" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Pulidora</p> 
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Pulidora de paño PRAZIS: esta pulidora se utiliza para realizar las micrografías de los materiales.</p>
                        </div>
                    </div>
                </div>
                <div className="qualityCardsDerCont flex wrap">
                    <p className="qualityTypes qualityTypesDer OoS flex">
                        Medición de tierras
                    </p>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/balanza.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Balanza</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Balanza secadora electrónica: para determinar la humedad de las tierras de moldeo.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/resistencia.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Equipo de resistencia</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Equipo de resistencia a la compresión y partición de las tierras de moldeo que nos van a determinar dichas propiedades.</p>
                        </div>
                        
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/tamizadora.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Equipo de tamices</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Equipo de tamices para análisis granulométrico: utilizado para determinar la granulometría de las arenas de moldeo.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/permeametro.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Permeámetro</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Permeámetro: que nos proporciona la capacidad de evacuar gases en las tierras de moldeo.</p>
                        </div>
                    </div>
                    <div className="qualityCardCont OoS" onMouseOver={(e) => showDescription(e)} onMouseLeave={(e) => hiddenDescription(e)}>
                        <img src="/images/quality/tolva.jpg" alt="Durometro" className="qualityCardImg" />
                        <div className="qualityCardTitleCont flex">
                            <p className="qualityCardTitle">Tolva de carga</p>
                        </div>
                        <div className="qualityCardDescCont flex">
                            <p className="qualityCardDesc">Tolva de carga</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality