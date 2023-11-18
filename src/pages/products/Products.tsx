import "./products.css";
import ProductCard from "../../components/productCard/ProductCard";

function Products() {

    const homeCard1Info = {
        imgSrc: "/images/products/pulleys/1.jpg",
        iconSrc: "/images/icons/pulley.png",
        title: "Poleas",
    }

    const homeCard2Info = {
        imgSrc: "/images/products/cones/1b.jpg",
        iconSrc: "/images/icons/cone.png",
        title: "Conos",
    }

    const homeCard3Info = {
        imgSrc: "/images/products/foundry/1.jpg",
        iconSrc: "/images/icons/foundry.png",
        title: "Fundición",
    }
    
    return (
        
        <div className="seccions flex wrap">

            <img src="/images/backgrounds/products.jpg" alt="Caternorte products background" className="qualityBg OoS"/>
            <div className="qualityBgFilter productsBgFilter"></div>

            <ProductCard imgSrc={homeCard1Info.imgSrc} iconSrc={homeCard1Info.iconSrc} title={homeCard1Info.title}/>
            <ProductCard imgSrc={homeCard2Info.imgSrc} iconSrc={homeCard2Info.iconSrc} title={homeCard2Info.title}/>
            <ProductCard imgSrc={homeCard3Info.imgSrc} iconSrc={homeCard3Info.iconSrc} title={homeCard3Info.title}/>
        </div>
    )
}

export default Products