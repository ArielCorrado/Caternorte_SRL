import './home.css';
import Slider from '../../components/slider/Slider';
import HomeProductCard from '../../components/homeProductCard/HomeProductCard';

function Home() {

    const homeCard1Info = {
        imgSrc: "/images/products/pulleys/1.jpg",
        iconSrc: "/images/icons/pulley.png",
        title: "Poleas",
        description: "Una polea es un dispositivo mecánico de tracción, que sirve para transmitir una fuerza.",
        descriptionTitle: "Polea"
    }

    const homeCard2Info = {
        imgSrc: "/images/products/cones/1b.jpg",
        iconSrc: "/images/icons/cone.png",
        title: "Conos",
        description: "Este tipo de elemento de transmisión tiene la finalidad de facilitar el montaje y desmontaje de poleas. Su uso permite que un mismo elemento de transmisión de potencia pueda ser montado en distintos diámetros de eje, solo cambiando esta pieza.",
        descriptionTitle: "Cono"
    }

    const homeCard3Info = {
        imgSrc: "/images/products/foundry/1.jpg",
        iconSrc: "/images/icons/foundry.png",
        title: "Fundición",
        description: "Fabricamos a la medida lo que el cliente desea a partir de un plano o modelo.",
        descriptionTitle: "Fundición"
    }
    
    return (
        <div className='homeSeccion componentToWaitImages flex column'>
            <Slider/>
            <div className='homeProductCardsCont flex wrap'>
                <HomeProductCard imgSrc={homeCard1Info.imgSrc} iconSrc={homeCard1Info.iconSrc} title={homeCard1Info.title} description={homeCard1Info.description} descriptionTitle={homeCard1Info.descriptionTitle} textButton='Poleas' link="/products/pulleys"/>
                <HomeProductCard imgSrc={homeCard2Info.imgSrc} iconSrc={homeCard2Info.iconSrc} title={homeCard2Info.title} description={homeCard2Info.description} descriptionTitle={homeCard2Info.descriptionTitle} textButton='Conos' link="/products/cones"/>
                <HomeProductCard imgSrc={homeCard3Info.imgSrc} iconSrc={homeCard3Info.iconSrc} title={homeCard3Info.title} description={homeCard3Info.description} descriptionTitle={homeCard3Info.descriptionTitle} textButton='Fundición' link="/products/foundry"/>
            </div>
        </div>
    );
}

export default Home;