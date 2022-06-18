import './App.css';
import {Home} from "./pages/Home";
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";


function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'about'} element={<About/>}/>
                <Route path={'profile/*'} element={<Profile/>}/>
            </Routes>
            <Footer/>

        </>
    );
}

export default App;
