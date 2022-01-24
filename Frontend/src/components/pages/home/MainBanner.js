import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MainBanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
        startDate:new Date(),
    };
  }

  changeDatepickerHandeller=(date)=>{
        this.setState({ startDate: date });
  }

  render() {

      const mainBannerOptions = {
          items: 1,
          loop: true,
          margin:0,
          smartSpeed: 700,
          dots: false,
          nav: true,
          autoplay: 4000,
          autoplayTimeout:4000,
          autoplayHoverPause:true,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut',
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:1,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:1,
                  nav:true,
                  loop:true
              },
          }
      };

      const startDate =this.state.startDate;
    return (
        <>
            {/* ===============  Main banner area start =============== */}
            <div className="main-banner">
                <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                    <div className="slider-item slider-item-1">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Caixa Economica</h2>
                                <h5>Caixa Mobile</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-2">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Caixa Economica</h2>
                                <h5>Cartão Visa</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="slider-item slider-item-3">
                        <div className="container">
                            <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <h2>Caixa Economica</h2>
                                <h5>Obrigado</h5>
                                
                            </div>
                        </div>
                    </div>
                 </OwlCarousel>
            </div>
            {/* ===============  Main banner area end =============== */}

            {/* ===============  findfrom area start ============= */}
            

            {/* ===============  findfrom area end =============== */}
        </>
    );
  }
}

export default MainBanner;
