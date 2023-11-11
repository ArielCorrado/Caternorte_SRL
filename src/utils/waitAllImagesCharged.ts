const waitAllImagesCharged = () : Promise <boolean> => {
    return new Promise((resolve) => {
        const images = document.querySelectorAll("img");
        const allImagesCount = images.length;
        let imagesCount = 0;
                                            console.log(allImagesCount)                                 
        images.forEach((image) => {
            
            // const print = (message: string) => {
            //     if(image.src.includes("qualityb")) console.log(image.src, Date.now(), message)
            //     if(!image.src.includes("qualityb")) console.log(Date.now(), message)
            // }

            console.log(typeof image.naturalHeight)
            
            if (image.complete) {                                                   //Al llegar esta linea ya puede haver imagenes cargadas que no activaran
                // print("complete");
                imagesCount ++;                                                     // el evento "load" o "error"
                if (imagesCount >= allImagesCount) resolve(true);
                return;
            }
            image.addEventListener("load", () => {                                  //Evento "load": La imagen pasó de cargando a correctamente cargada
                // print("load");
                imagesCount ++;
                if (imagesCount >= allImagesCount) resolve(true);
            })
            image.addEventListener("error", () => {                                 //Evento "error": La imagen paso de cargando a error (no se pudo cargar)
                // print("error");
                imagesCount ++;
                if (imagesCount >= allImagesCount) resolve(true);
            })
        })                                                      
    })                                                                                  
}                                                                                       


export default waitAllImagesCharged;