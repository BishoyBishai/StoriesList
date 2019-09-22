import React from 'react';
import { render } from 'react-dom';
import Header from './shared/Header';
import Footer from './shared/Footer';
import StoriesContainer from './secure/StoriesContainer';

import './style.scss';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <StoriesContainer/>
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById('app-root'));
