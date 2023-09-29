import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBarBg from './components/navBarBg/NavBarBg';

function App() {
    return (
        <BrowserRouter>
            <NavBarBg/>
            <Routes>
                <Route path="/" element={<Home/>}/>                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
