import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/SimplifiedHeader";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import ProductListPage from "./pages/ModernProductListing";
import ProductDetailPage from "./pages/ModernProductDetail";
import ContactPage from "./pages/ContactPage";

// Dedicated Product Pages
import FingerprintProductsPage from './pages/FingerprintProductsPage';
import RfidReader from './pages/RfidReader';

// Import more product pages as you create them
// import FaceRecognition from './pages/FaceRecognition';
// import DomeCamera from './pages/DomeCamera';
// import BulletCamera from './pages/BulletCamera';
// import PTZCamera from './pages/PTZCamera';
// import NVRDVR from './pages/NVRDVR';
// import AccessControl from './pages/AccessControl';
// etc...

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Dedicated Product Pages */}
            <Route path="/fingerprint-products" element={<FingerprintProductsPage />} />
            <Route path="/rfid-reader" element={<RfidReader />} />
            
            {/* Add more dedicated product pages as you create them */}
            {/* 
            <Route path="/face-recognition" element={<FaceRecognition />} />
            <Route path="/dome-camera" element={<DomeCamera />} />
            <Route path="/bullet-camera" element={<BulletCamera />} />
            <Route path="/ptz-camera" element={<PTZCamera />} />
            <Route path="/nvr-dvr" element={<NVRDVR />} />
            <Route path="/access-control" element={<AccessControl />} />
            <Route path="/time-attendance" element={<TimeAttendance />} />
            */}

            {/* Category Page */}
            <Route path="/category/:categoryId" element={<CategoryPage />} />

            {/* Generic Product Listing (Fallback for products without dedicated pages) */}
            <Route path="/products/:categoryId/:productTypeId" element={<ProductListPage />} />

            {/* Product Detail Page */}
            <Route path="/product/:categoryId/:productTypeId/:productId" element={<ProductDetailPage />} />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="py-20 text-center">
                  <h1 className="text-4xl font-bold">404 - Not Found</h1>
                  <a href="/" className="text-emerald-600 underline">
                    Back Home
                  </a>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;