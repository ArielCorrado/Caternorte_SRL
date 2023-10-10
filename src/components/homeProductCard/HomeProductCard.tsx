import "./homeProductCard.css";
import Button1 from "../buttons/Button1";
import { useRef, useEffect } from "react";

type PropsHomeProductCard = {
    imgSrc: string,
    iconSrc: string,
    title: string,
    description: string,
    descriptionTitle: string  
    textButton: string  
}

function HomeProductCard ({imgSrc, iconSrc, title, description, descriptionTitle, textButton}: PropsHomeProductCard) {

    const cardRef =  useRef <HTMLDivElement | null> (null);
    
    useEffect(() => {

        if (cardRef.current) {
                     
            const homeProductCardDescCont = cardRef.current.querySelector(".homeProductCardDescCont") as HTMLDivElement;
            const homeProductCardCont = cardRef.current as HTMLDivElement;
            const homeProductCardIconCont = cardRef.current.querySelector(".homeProductCardIconCont") as HTMLDivElement;
            const homeProductCardTitleCont = cardRef.current.querySelector(".homeProductCardTitleCont") as HTMLDivElement;
            const homeProductCardImg = cardRef.current.querySelector(".homeProductCardImg") as HTMLImageElement;   
                
            homeProductCardCont.addEventListener("mouseover", () => {
                homeProductCardDescCont.classList.remove("homeProductCardDescContAnimationUp");
                homeProductCardDescCont.classList.add("homeProductCardDescContAnimationDown");
                homeProductCardIconCont.classList.add("opacity0");
                homeProductCardTitleCont.classList.add("opacity0");
                homeProductCardImg.classList.add("opacity0");
            })
    
            homeProductCardCont.addEventListener("mouseleave", () => {
                homeProductCardDescCont.classList.remove("homeProductCardDescContAnimationDown");
                homeProductCardDescCont.classList.add("homeProductCardDescContAnimationUp");
                homeProductCardIconCont.classList.remove("opacity0");
                homeProductCardTitleCont.classList.remove("opacity0");
                homeProductCardImg.classList.remove("opacity0");
            })

        }        

    }, [])

    return (
        <div className="homeProductCardCont flex" ref={cardRef}>
            <img src={imgSrc} alt="Caternorte Home Product" className="homeProductCardImg opacityTransition035"/>
            <div className="homeProductCardIconCont opacityTransition035 flex"><img src={iconSrc} alt="Caternorte Home Product Icon" className="homeProductCardIcon"/></div>
            <div className="homeProductCardTitleCont opacityTransition035 flex"><p className="homeProductCardTitle">{title}</p></div>

            <div className="homeProductCardDescCont homeProductCardDescContAnimation flex column">
                <p className="homeProductCardDescTitle">{descriptionTitle}:</p>
                <p className="homeProductCardDesc">{description}</p>
                <Button1 buttonText={textButton} className="button1"/>
            </div>
        </div>
    )
}

export default HomeProductCard