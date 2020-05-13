import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Footer from '../../components/Footer/Footer';


import './Home.scss'
class Home extends Component  {
//
  render() {

    return (
      <>

        <Banner />
        <About />
        <Projects />
        <Footer />
      </>
    );
  }

}
export default Home;
