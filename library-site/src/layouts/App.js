import React, { Component } from 'react';
import '../styles/_app.sass';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <header className="header">{<Header />}</header>
          <main className="main">
            <aside className="main_navigation">{<Navigation />}</aside>
            <section className='main_page'>{<Page />}</section>
          </main>
          <footer className="footer">{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
