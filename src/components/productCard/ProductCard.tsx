import "./productCard.css";

type ProductsProductCard = {
    imgSrc: string,
    iconSrc: string,
    title: string,
}

function ProductCard ({imgSrc, iconSrc, title}: ProductsProductCard) {

    return (
        <div className="homeProductCardCont productsProductCardCont productsCardImgHover flex OoS">
            <img src={imgSrc} alt="Caternorte Home Product" className="homeProductCardImg opacityTransition035"/>
            <div className="homeProductCardIconCont opacityTransition035 flex"><img src={iconSrc} alt="Caternorte Home Product Icon" className="homeProductCardIcon"/></div>
            <div className="homeProductCardTitleCont opacityTransition035 flex"><p className="homeProductCardTitle">{title}</p></div>
        </div>
    )
}

export default ProductCard