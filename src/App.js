import './App.css';
import Login from "./pages/Login";
import {AuthContextProvider} from "./utilities/AuthContext";
import {Route, Routes} from "react-router-dom";
import PrivateRoutes from "./utilities/PrivateRoutes";
import Home from "./pages/Home";
import IsAuth from "./utilities/IsAuth";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Addpost from "./pages/Addpost";
import ViewPosts from "./pages/ViewPosts";


function App() {
console.log(process.env.REACT_APP_firebase_apiKey)

    return (
        <>
            <AuthContextProvider>
                <IsAuth>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                </IsAuth>
                <PrivateRoutes>
                    <Navbar/>
                    <Routes>
                        <Route path={'/'} element={<Home/>} exact/>
                        <Route path={'/profile'} element={<Profile/>}></Route>
                        <Route path={'/addpost'} element={<Addpost/>}/>
                        <Route path={'/viewpost/*'} element={<ViewPosts/>}></Route>
                    </Routes>
                </PrivateRoutes>


            </AuthContextProvider>
        </>
    );
}

export default App;
