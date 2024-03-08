import { useRef, useContext } from "react";
import "./contact.css";
import { SpinnerContext } from "../../context/spinnerContext";
import { swalPopUp } from "../../utils/swal";
import { gtag_report_conversion } from "../../ads/contact";

type formValues = {
    nombre: string;
    telefono: string;
    email: string;
    empresa: string;
    mensaje: string;
}

function Contact() {

    const {showSpinner} = useContext(SpinnerContext)
    const formRef = useRef <HTMLFormElement | null> (null);

    const sendForm = async () => {
        
        const formData = new FormData(formRef.current as HTMLFormElement);
        const data = Object.fromEntries(formData) as formValues;

        if (data.nombre.trim() !== "" && data.telefono.trim() !== "" && data.email.trim() !== "" && data.empresa.trim() !== "" && data.mensaje.trim() !== "") {
        
            try {
                showSpinner(true);
                const respJSON = await fetch ("/sendmail.php", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const respOBJ = await respJSON.json();
                showSpinner(false);
                if (respOBJ.msg.includes("Error")) {
                    swalPopUp("Ops!", `${respOBJ.msg}, Intente otra vez`, "error");
                } else {
                    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputForm");
                    inputs.forEach((input) => input.value = "");
                    gtag_report_conversion();
                    swalPopUp("Enviado!", "Mensaje Enviado con Exito, Gracias por Contactarnos!", "success");
                } 
                
            } catch (err: unknown) {
                showSpinner(false); 
                swalPopUp("Ops!", err instanceof Error ? `Error al enviar el mensaje: ${err.message}` : `Error al enviar el mensaje: problema desconocido`, "error");
            }

        } else {
            swalPopUp("Ops!", "Falta Ingresar Algún Dato", "warning");       
        }
        
    }

    return (
        <div className="seccions contactSeccion componentToWaitImages flex">

            <img src="/images/backgrounds/contactb.webp" alt="Caternorte calidad background" className="qualityBg OoS"/>
            <div className="qualityBgFilter"></div>
                                   
            <div className='contFormContacto flex column OoS animateTitleCorto'>
                <form action="" className='form OoS' ref={formRef}>
                    <div className='tel-contacto flex OoS'>
                        <a href="https://wa.me/+5491134713398" target='_blank' rel="noreferrer" className='flex'>
                            <img src="/images/icons/ws.png" alt="phone" className='imgContactoPhone' />
                            <h2>+54 911 3471-3398</h2>
                        </a>
                    </div>
                    <div className='email-contacto flex OoS'>
                        <a href="mailto:info@caternortesrl.com.ar" className='flex'>
                            <img src="/images/icons/email.png" alt="email" className='imgContactoEmail' />
                            <h2>info@caternortesrl.com.ar</h2>
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