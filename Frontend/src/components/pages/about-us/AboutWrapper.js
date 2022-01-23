import React, { Component } from "react";
import ModalVideo from 'react-modal-video'

import img1 from "../../../assets/images/unicv/UNICV.png"
import img2 from "../../../assets/images/unicv/fct_logo.png"
import { Link } from "react-router-dom";

class AboutWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const { isOpen } = this.state;
        return (
            <>
                {/* ===============  About wrapper area start =============== */}


                <div className="container">
                    <div className="blog-details-wrapper pt-120">
                        <div className="row">
                            <div className="blog-details">
                                <div className="col-lg-12">
                                    
                                    <div className="blog-gallary">

                                        <img src={img1} alt="" className="img-fluid" width={700}/>
                                        <img src={img2} alt="" className="img-fluid" width={500}/>

                                    </div>
                                </div>
                                <div className="end"/>
                                <div className="blog-title-xl center">
                                    <h1>PESI</h1>
                                    <br/>
                                    <h3>Caixa Economica DashBoard CEO e CIO</h3>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>





                {/* ===============  About wrapper area end =============== */}
            </>
        );
    }
}

export default AboutWrapper;
