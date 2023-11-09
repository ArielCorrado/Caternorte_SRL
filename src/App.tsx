import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBarBg from './components/navBarBg/NavBarBg';
import Footer from './components/footer/Footer';
import WsFloating from './components/wsFloating/WsFloating';
import Contact from './pages/contact/Contact';
import Quality from './pages/quality/Quality';
import Infrastructure from './pages/infrastructure/Infrastructure';

function App() {

    return (
        <BrowserRouter>
            <NavBarBg/>
            <WsFloating/>
            <Routes>
                <Route path="/" element={<Home/>}/>    
                <Route path="/quality" element={<Quality/>}/>       
                <Route path="/contact" element={<Contact/>}/>  
                <Route path="/infrastructure" element={<Infrastructure/>}/>        
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
