import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBarBg from './components/navBarBg/NavBarBg';
import Footer from './components/footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <NavBarBg/>
            <Routes>
                <Route path="/" element={<Home/>}/>                
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
