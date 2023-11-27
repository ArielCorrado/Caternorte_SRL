import "./products.css";
import ProductCard from "../../components/productCard/ProductCard";

function Products() {

    const homeCard1Info = {
        imgSrc: "/images/products/pulleys/1.jpg",
        iconSrc: "/images/icons/pulley.png",
        title: "Poleas",
    }

    const homeCard2Info = {
        imgSrc: "/images/products/cones/4.png",
        iconSrc: "/images/icons/cone.png",
        title: "Conos",
    }

    const homeCard3Info = {
        imgSrc: "/images/products/foundry/2.jpg",
        iconSrc: "/images/icons/foundry.png",
        title: "Fundición",
    }
    
    return (
        
        <div className="seccions componentToWaitImages flex column">

            <img src="/images/backgrounds/products.webp" alt="Caternorte products background" className="qualityBg OoS"/>
            <div className="qualityBgFilter productsBgFilter"></div>

            <div className="qualityIntroCont flex column OoS">
                <p className="qualityIntro1">
                    Desde modelos estándar hasta soluciones a medida, nuestro catálogo abarca una amplia gama de tamaños y materiales. 
                </p>
                <p className="qualityIntro2 productsIntro2">
                    Nuestro compromiso con la calidad se refleja en cada pieza, respaldado por años de experiencia en la industria de la fundición. 
                </p>
            </div>

            <div className="flex wrap">
                <ProductCard imgSrc={homeCard1Info.imgSrc} iconSrc={homeCard1Info.iconSrc} title={homeCard1Info.title} link={"/products/pulleys"}/>
                <ProductCard imgSrc={homeCard2Info.imgSrc} iconSrc={homeCard2Info.iconSrc} title={homeCard2Info.title} link={"/products/cones"}/>
                <ProductCard imgSrc={homeCard3Info.imgSrc} iconSrc={homeCard3Info.iconSrc} title={homeCard3Info.title} link={"/products/foundry"}/>
            </div>
        </div>
    )
}

export default Products