import React, { Component } from "react";

import bd_png from "../../../assets/images/caixa-economica/Organograma.png"

import { Link } from "react-router-dom";
class CaixaEconomica extends Component {

    componentDidMount() {
        this.scrollTop();
    }

    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <>
                {/* ===============  breadcrumb area start =============== */}
                <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="breadcrumb-wrap">
                                    <h2>Caixa Economica</h2>
                                    <ul className="breadcrumb-links">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                            <i className="bx bx-chevron-right" />
                                        </li>
                                        <li>Caixa Economica</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===============  breadcrumb area end =============== */}
                {/* ===============  Blog wrapper area start =============== */}
                <div className="blog-details-wrapper pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog-details">
                                    <div className="blog-title-xl">
                                        <h3>Caixa Economica - Organograma</h3>
                                        <br />
                                    </div>
                                    <div className="blog-img-xl">
                                        <img src={bd_png} alt="" className="img-fluid" />
                                    </div>
                                    <div className="blog-texts mt-50">

                                        <h3 className="sub-title">Caixa Economica - Missão</h3>
                                        <p className="mt-20">Prestar um serviço financeiro global de qualidade, contribuindo para o desenvolvimento económico sustentável do país e promover a inclusão financeira.
                                        </p>

                                        <br />
                                        <h3 className="sub-title mt-50">Caixa Economica - Visão</h3>
                                        <p className="mt-20">Ser reconhecido como o banco de referência incontornável no sistema financeiro cabo-verdiano, sustentado pela inovação tecnológica e comercial, gestão prudente e criteriosa do risco e que mais se identifique com Cabo Verde.
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ===============  Blog wrapper area end =============== */}
            </>
        );
    }
}

export default CaixaEconomica;
