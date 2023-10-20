import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBarBg from './components/navBarBg/NavBarBg';
import Footer from './components/footer/Footer';
import WsFloating from './components/wsFloating/WsFloating';
import Contact from './pages/contact/Contact';

function App() {

    return (
        <BrowserRouter>
            <NavBarBg/>
            <WsFloating/>
            <Routes>
                <Route path="/" element={<Home/>}/>         
                <Route path="/contact" element={<Contact/>}/>         
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
