import React from 'react';

// importing react-router-dom: 
// notice that this time we 
// import Route component
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>  
    </div>
);

function App() {
    return (
        <div>
            <Route path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </div>
    );
}

export default App;
