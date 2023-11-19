import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBarBg from './components/navBarBg/NavBarBg';
import Footer from './components/footer/Footer';
import WsFloating from './components/wsFloating/WsFloating';
import Contact from './pages/contact/Contact';
import Quality from './pages/quality/Quality';
import Infrastructure from './pages/infrastructure/Infrastructure';
import { Navigate } from 'react-router-dom';
import "./styles/animations.css";
import { SpinnerContext } from './context/spinnerContext';
import { useContext } from 'react';
import Products from './pages/products/Products';
import Pulleys from './pages/pulleys/Pulleys';

function App() {

    const {spinner} = useContext(SpinnerContext);

    return (
        <BrowserRouter>
            {spinner}
            <NavBarBg/>
            <WsFloating/>
            <Routes>
                <Route path="/" element={<Home/>}/>    
                <Route path="/quality" element={<Quality/>}/>       
                <Route path="/contact" element={<Contact/>}/>  
                <Route path="/products" element={<Products/>}/>  
                <Route path="/products/pulleys" element={<Pulleys/>}/> 
                <Route path="/infrastructure" element={<Infrastructure/>}/>     
                <Route path="*" element={<Navigate to="/"/>}/>     
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
