import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navlink
} from 'react-router-dom';



//components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Info from './components/pages/info';
import Barkart from './components/pages/barkart';
import Nyheter from './components/pages/nyheter';
import Footer from './components/footerComponent/footer'


//includes
import './Assets/css/default.min.css';

const baseUrl = process.env.PUBLIC_URL;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path={'/'}component={Homepage}/>
        <Route exact path='/Barkart'component={Barkart} />
        <Route exact path='/nyheter'component={Nyheter} />
        <Route exact path='/Info'component={Info} />

      <Footer />
      </div>
      </Router>

    );
  }
}

export default App;
