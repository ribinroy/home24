import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path='/' exact>
                        <ProductList />
                    </Route>
                    <Route path='/kategorie/:type'></Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
