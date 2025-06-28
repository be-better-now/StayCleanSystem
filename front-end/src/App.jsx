import React from "react";
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import CoursePage from "./pages/CoursePage";
import ViewProfilePage from "./pages/ViewProfilePage";
import CourseDetail from "./pages/CourseDetail";
import StaffLayout from "./layouts/StaffLayout";
import StaffDemoPage from "./pages/staff/StaffDemoPage";
import CourseListPage from "./pages/staff/CourseListPage";
import PlaceholderPage from "./pages/staff/PlaceholderPage";
import StaffDashboardPage from "./pages/staff/StaffDashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SurveyPage from "./pages/SurveyPage";

// import other pages as needed

function AppContent() {
    const location = useLocation();
    const isStaffRoute = location.pathname.startsWith('/staff');
    return (
        <>
            {!isStaffRoute && <Header />}
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/* Add other routes here */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/courses" element={<CoursePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/view-profile" element={<ViewProfilePage />} />
                    <Route path="/take-survey" element={<SurveyPage />} />
                    <Route path="/view-course/:id" element={<CourseDetail />} />

                    
                    {/* Staff Routes with Layout */}
                    <Route path="/staff" element={
                        <ProtectedRoute allowedRoles={['Staff', 'Manager', 'Admin']}>
                            <StaffLayout />
                        </ProtectedRoute>
                    }>
                        <Route index element={<StaffDashboardPage />} />
                        <Route path="courses" element={<CourseListPage />} />
                        <Route path="programs" element={<PlaceholderPage />} />
                        <Route path="schedule" element={<PlaceholderPage />} />
                        <Route path="surveys" element={<PlaceholderPage />} />
                        <Route path="reports" element={<PlaceholderPage />} />
                        <Route path="settings" element={<PlaceholderPage />} />
                        <Route path="profile" element={<PlaceholderPage />} />
                    </Route>
                    
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </main>
            {!isStaffRoute && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
