import React from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <ProductList />
            </main>
            <Footer />
        </>
    );
};

export default App;
