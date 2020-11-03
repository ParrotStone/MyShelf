import React from 'react';
import { Router, Redirect } from '@reach/router';
import Homepage from './components/Homepage';
import SignupForm from './components/signup/SignupForm';
import LoginForm from './components/login/LoginForm';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import ResetPasswordForm from './components/common/ResetPasswordForm';
import TermsAndConditions from './components/common/TermsAndConditions';
import PrivacyPolicy from './components/common/PrivacyPolicy';
import NotFound from './components/common/NotFound';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Homepage path='/' />
      <Homepage path='/home' />
      <SignupForm path='/sign-up' />
      <LoginForm path='/login' />
      <ResetPasswordForm path='/reset-password' />
      <Dashboard path='/dashboard' />
      <AboutUs path='/about-us' />
      <TermsAndConditions path='/terms-conditions' />
      <PrivacyPolicy path='/privacy-policy' />
      <NotFound path='/not-found' />
      <Redirect default noThrow from='/*' to='/not-found' />
    </Router>
  );
}

export default App;
