import React, { Component } from "react";
import scrollImage from "../../assets/images/scroll3.png";
import { FaArrowUp } from "react-icons/fa";
import "./Banner.scss";
class Banner extends Component {
  state = {
    showArrow: false
  };
  /*This function show arrow
  in the button of page when scroll
   and after click in that scroll up to in first page*/
  render() {
    window.onscroll = () => {
      if (window.pageYOffset >= 950) {
        this.setState({
          showArrow: true
        });
      } else {
        this.setState({
          showArrow: false
        });
      }
    };
    return (
      <div className="container-fluid">
        {/*Check if arrow is here based on my condition and return my class*/}
        <a
          href="#"
          className={
            !this.state.showArrow
              ? "btn up-link text-uppercase my-2"
              : "btn up-link text-uppercase my-2 display"
          }
        >
          <FaArrowUp />
        </a>
        <div className="row max-height justify-content-center align-items-center ">
          <div className="col-9 mx-auto banner text-center content-main-header">
            <h1 className="text-capitalize banner-title">
              welcome to my portfolio which I show my skills and my previeus
              work
            </h1>
          </div>
        </div>
        <div className="header-link-content">
          <a href="#about" className="btn header-link primary-color">
            <img src={scrollImage} alt="scrollImage" />
          </a>
        </div>
      </div>
    );
  }
}

export default Banner;
/*
var change = false;

*/
