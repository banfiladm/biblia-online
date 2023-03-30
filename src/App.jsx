// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import BibleReadComponent from './Components/BibleReadComponent';
import BlogComponent from './Components/BlogComponent';
import SalmoComponent from './Components/SalmoComponent';
import ContactFormComponent from './Components/ContactFormComponent';
import JobFormComponent from './Components/JobFormComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <main>
        <Switch>
          <Route path="/" exact component={BibleReadComponent} />
          <Route path="/leia-a-biblia" component={BibleReadComponent} />
          <Route path="/blog" component={BlogComponent} />
          <Route path="/salmo" component={SalmoComponent} />
          <Route path="/fale-conosco" component={ContactFormComponent} />
          <Route path="/trabalhe-conosco" component={JobFormComponent} />
        </Switch>
      </main>
      <FooterComponent />
    </Router>
  );
}

export default App;
