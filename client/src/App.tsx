import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <>
                <Header />
                <main>
                    {/* <Route index element={<ProductList />} /> */}
                    <ProductList />
                </main>
                <Footer />
            </>
        </>
    );
};

export default App;
