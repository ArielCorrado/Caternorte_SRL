import "./infrastructure.css";

function Infrastructure () {
  
    return (
        <div className="seccions componentToWaitImages flex column">
            <img src="/images/backgrounds/infrastructure2b.webp" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter"></div>

            <p className="qualityIntro1 infrastructureIntro1">En Caternorte, la excelencia en la fundición es impulsada por el compromiso con la calidad.</p>
            <p className="qualityIntro2 infrastructureIntro2">En nuestra planta contamos con el siguiente equipamiento industrial y herramientas que le dan vida a nuestros procesos:</p>

            <div className="infrastructureCardsCont flex wrap">
                <div className="infrastructureCardsColumnCont flex column">
                    <div className="infrastructureCardCont OoS">
                        <div className="infrastructureCardRowTitleCont flex">                            
                            <img src="/images/icons/moldeo.png" alt="Caternorte moldeo" className="infrastructureCardRowTitleImg"/>
                            <p>Moldeo</p>
                        </div>
                        <div className="infrastructureCardRowCont infrastructureCardRowContPcipal flex">
                            <p>Moldeadora automática modelo HUNTER HP20 con capacidad para moldes de 500 x 600mm</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Moldeo semiautomático en platos sacudidores</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Moldeo en resina autofraguante marca GEROSA</p>
                        </div>
                    </div>

                    <div className="infrastructureCardCont OoS">
                        <div className="infrastructureCardRowTitleCont infrastructureCardRowTitleContDark flex">
                            <img src="/images/icons/ground.png" alt="Caternorte moldeo" className="infrastructureCardRowTitleImg"/>
                            <p>Preparación de Tierra</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Molino Marca SIMPSON de alta velocidad</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Molino Marca CORN</p>
                        </div>
                        <div className="infrastructureCardRowCont infrastructureCardRowContPcipal flex">
                            <p>Capacidad total Efectiva 20 toneladas x Hora</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Cintas Transportadoras</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 Puente grua</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Tambor enfriador</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Tolva de almacenamiento con capacidad efectiva instalada de 40 toneladas</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 granalladoras a cinta modelo AC1200 con tambor de 700m</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 Amoladoras de pie</p>
                        </div>
                    </div>
                </div>

                <div className="infrastructureCardsColumnCont flex column">
                    <div className="infrastructureCardCont OoS">
                        <div className="infrastructureCardRowTitleCont infrastructureCardRowTitleContDark orange flex">
                            <img src="/images/icons/colado.png" alt="Caternorte moldeo" className="infrastructureCardRowTitleImg"/>
                            <p>Fusión y Colado</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Horno eléctrico marca INDUCTOTHERM 350kw con dos cubas con capacidad de 800kg y 350kg</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Horno eléctrico marca INDUCTOTHERM 250kw con dos cubas con capacidad de 500kg y 350kg</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>Horno eléctrico marca PILLAR 250kw con dos cubas con capacidad de 500kg</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 Equipos CARBOMAX </p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 Pirómetros de inmersion </p>
                        </div>
                    </div>
                    
                    <div className="infrastructureCardCont OoS">
                        <div className="infrastructureCardRowTitleCont dark flex">
                            <img src="/images/icons/noyo.png" alt="Caternorte moldeo" className="infrastructureCardRowTitleImg"/>
                            <p>Noyería</p>
                        </div>
                        <div className="infrastructureCardRowCont infrastructureCardRowContPcipal flex">
                            <p>3 Noyeras manuales</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>1 Noyera automática en caliente marca LOSINO</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>2 Noyeras de SHELL-MOULDING doble figura</p>
                        </div>
                        <div className="infrastructureCardRowCont flex">
                            <p>1 Horno de curado de noyos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Infrastructure