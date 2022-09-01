import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/categories.js';
import Products from './components/products.js';


function App() {
    
    return (
        <>
            <Header />
            <Categories />
                <Products />
           
            <Footer />
        </>
    )
}

export default App;