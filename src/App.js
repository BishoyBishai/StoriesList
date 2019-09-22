import React from 'react';
import { render } from 'react-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import './style.scss';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <div>Body</div>
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById('app-root'));
