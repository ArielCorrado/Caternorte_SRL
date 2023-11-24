import Swal, {SweetAlertOptions, SweetAlertIcon} from "sweetalert2";

const swalPopUp = (title: string, text: string, icon: SweetAlertIcon) => {

    const options : SweetAlertOptions = {               // Agregar la clase .swal2-icon-content {
        icon: icon,                                     // color: #ff5e15; } Sino los iconos de warning e info no se ven
        title: title,
        text: text,
        confirmButtonColor: '#ff5e15',
        iconColor: '#ff5e15',
        color: '#505050',
        scrollbarPadding: true,
        customClass: {
            confirmButton: 'sweetConfirmBoton',
        },
    }

    Swal.fire(options)

}

export {swalPopUp};