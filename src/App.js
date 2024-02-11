import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Chat from "./pages/Chat";
import Connect from "./pages/Connect";
import CreateProfile from "./pages/CreateProfile";

import "bootstrap/dist/css/bootstrap.min.css";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
function App() {
    return (
        <>
        
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component with exact path "/", in component props we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Landing />}
                    />
 
                    {/* This route is for about component with exact path "/about", in component props we passes the imported component*/}
                    <Route
                        path="/about"
                        element={<About />}
                    />
 
                    {/* This route is for landing component with exact path "/landing", in component props we passes the imported component*/}
                    <Route
                        path="/home"
                        element={<Home />}
                    />

                    {/* This route is for chat component with exact path "/chat", in component props we passes the imported component*/}
                    <Route
                        path="/chat"
                        element={<Chat />}
                    />

                    {/* This route is for chat component with exact path "/chat", in component props we passes the imported component*/}
                    <Route
                        path="/connect"
                        element={<Connect />}
                    />                    
                    
                    <Route
                        path="/create-profile"
                        element={<CreateProfile />}
                    />   

 
                    {/* If any route mismatches the upper  route endpoints then, redirect triggers and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
        </>
    );
}
 
export default App;