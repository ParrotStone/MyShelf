import React from 'react';
import { Router, Redirect } from '@reach/router';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import NotFound from './components/common/NotFound';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Homepage path='/' />
      <Homepage path='/home' />
      <Dashboard path='dashboard' />
      <NotFound path='not-found' />
      <Redirect default noThrow from='/*' to='/not-found' />
    </Router>
  );
}

export default App;
