import { useRef } from "react";
import "./contact.css";

function Contact() {

    const formRef = useRef <HTMLFormElement | null> (null);

    const sendForm = () => {

    }

    return (
        <div className="seccions contactSeccion seccionToWaitImages">

            <img src="/images/backgrounds/contactb.jpg" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter"></div>
                                   
            <div className='contFormContacto flex column OoS animateTitleCorto'>
                <form action="" className='form OoS' ref={formRef}>
                    <div className='tel-contacto flex OoS'>
                        <a href="https://wa.me/+5491140869822" target='_blank' rel="noreferrer" className='flex'>
                            <img src="/images/icons/ws.png" alt="phone" className='imgContactoPhone' />
                            <h2>+54 911 3471-3398</h2>
                        </a>
                    </div>
                    <div className='email-contacto flex OoS'>
                        <a href="mailto:info.carternorte@gmail.com" className='flex'>
                            <img src="/images/icons/email.png" alt="email" className='imgContactoEmail' />
                            <h2>info.carternorte@gmail.com</h2>
                        </a>
                    </div>
                    <div className='contTituloContacto flex'>
                        <h2 className='titulo-contacto'>ENVIANOS TU CONSULTA</h2>
                    </div>
                    <input type="text" name="nombre" className='formNom OoS inputForm' placeholder='NOMBRE Y APELLIDO' />
                    <input type="tel" name="telefono" className='formTel OoS inputForm' placeholder='TELÉFONO' />
                    <input type="email" name="email" className='formEmail OoS inputForm' placeholder='E-MAIL' />
                    <input type="text" name="empresa" className='formEmpresa OoS inputForm' placeholder='EMPRESA' />
                    <textarea name="mensaje" className='formMsj OoS inputForm' placeholder='MENSAJE' rows={20} cols={45} />
                </form>
                <div className='contBotonContacto flex'><button type="button" className='boton-contacto' onClick={sendForm}> Enviar </button></div>
            </div>

        </div>
    )
}

export default Contact