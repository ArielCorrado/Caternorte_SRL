export function gtag_report_conversion (url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    window.gtag('event', 'conversion', {
        'send_to': 'AW-16479601328/8G7QCLqf-JkZELCFi7I9',
        'event_callback': callback
    });
    console.log("Contacto desde sitio web");
    return false;
}