import React , {Component} from 'react';


import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Profile from './../profile';
import Protfolio from './../Protfolio';
import SocaiMedia from './../SocaiMedia';
import Work from './../Work'

class Index extends Component {
  render() {
    return(
      <div>
        <Home />
        <Work />
        <Profile />
        <Protfolio />
        <About />
        <SocaiMedia />
        <Footer />
      </div>
    )
  }
}

export default Index;
