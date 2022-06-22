import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Addpost from "./pages/Addpost";
import Footer from "./components/Footer";


function App() {

    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
            </Routes>
            <Navbar/>
            <Routes>

                <Route path={'/'} element={<Home/>}/>
                <Route path={'about'} element={<About/>}/>
                <Route path={'profile/*'} element={<Profile/>}/>
                <Route path={'addpost/'} element={<Addpost/>}/>
            </Routes>
            <Footer/>

        </>
    );
}

export default App;
