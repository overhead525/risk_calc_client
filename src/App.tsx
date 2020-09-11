import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StartPage from './pages/start-page/StartPage';

const App: React.FC = () => {
    return (
        <Router>
            <header>Header</header>
            <Route exact path="/" component={StartPage} />
        </Router>
    );
};

export default App;
