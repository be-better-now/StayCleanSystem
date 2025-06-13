import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// import other pages as needed

function App() {
    return (
        <Router>
            <Header/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/* Add other routes here */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
