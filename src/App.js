import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <ProductProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Hero />
                    <div id="products">
                        <ProductList />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                    <div id="contact">
                        <Contact />
                    </div>
                    <Footer />
                </div>
            </Router>
        </ProductProvider>
    );
}

export default App;
