import "./productCard.css";
import { Link } from "react-router-dom";

type ProductsProductCard = {
    imgSrc: string,
    iconSrc: string,
    title: string,
    link: string
}

function ProductCard ({imgSrc, iconSrc, title, link}: ProductsProductCard) {

    return (
        <Link to={link} className="homeProductCardCont productsProductCardCont productsCardImgHover flex OoS">
            <img src={imgSrc} alt="Caternorte Home Product" className="homeProductCardImg opacityTransition035"/>
            <div className="homeProductCardIconCont opacityTransition035 flex"><img src={iconSrc} alt="Caternorte Home Product Icon" className="homeProductCardIcon"/></div>
            <div className="homeProductCardTitleCont opacityTransition035 flex"><p className="homeProductCardTitle">{title}</p></div>
        </Link>
    )
}

export default ProductCard