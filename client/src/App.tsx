import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route path='/'>
                        <ProductList />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
