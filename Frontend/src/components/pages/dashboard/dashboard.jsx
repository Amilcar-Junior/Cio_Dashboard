import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import axios from "axios";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

import { retrieveDetritosPraias } from "../../../conection/detritosPraia/actions";
import { retrieveResultadoAreiaGranulometrias } from "../../../conection/resultadoareiagranulometrias/actions";

import { retrieveCorrentelitoraneas } from "../../../conection/correnteslitoraneas/actions";

import "react-vis/dist/style.css";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import moment from "moment";
import GraficoOndas from "./GraficoOndas";
import GraficoCorrentes from "./GraficoCorrentes";
import GraficoVelCorrentes from "./GraficoVelCorrentes";

import GraficoDetritos from "./GraficoDetritos";
import GraficoTamanhoSedimento from "./GraficoTamanhoSedimento";
import GraficoTamanhoSedimentoQuantidade from "./GraficoTamanhoSedimentoQuantidade";
import GraficoMudancaSedimento from "./GraficoMudancaSedimento";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderColor: "black",
}));

const minOffset = 0;
const maxOffset = 60;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const year = new Date().getFullYear();
    this.years = Array.from(new Array(50), (val, index) => index + year);

    this.state = {
      selectOptions: [],

    };
  }

  
  async getOptionsPraia() {
    const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/praias");
    const data = res.data;

    const options = data.map((e) => ({
      value: e.id,
      label: e.name_praia,
    }));

    this.setState({ selectOptions: options });
  }

  async handleChange(e) {
    this.setState({ currentPraia: e.value });

   
    const corrente = this.props.correntelitoraneas.filter( e => e.praia.id === e.value)
   


    let Valor1 = 0;
    let Valor2 = 0;
    let soma1 = 0;
    let media1 = 0;
    let x = 0;
    let Valor3 = 0;
    let Valor4 = 0;
    let soma2 = 0;
    let media2 = 0;
    let x1 = 0;
    corrente.map((e) => {
      if (moment(e.date).format("MMMM YYYY") == "January 2022") {
        x = +1;
        Valor1 = Valor1 + e.direction_after_5_minutes;
        Valor2 = Valor2 + e.direction_after_1_minute;
        soma1 = Valor1 + Valor2;
        media1 = soma1 / x;
      } else if (moment(e.date).format("MMMM YYYY") == "February n2022") {
        x = +1;
        Valor3 = Valor3 + e.direction_after_5_minutes;
        Valor4 = Valor4 + e.direction_after_1_minute;
        soma2 = Valor3 + Valor4;
        media2 = soma2 / x1;
      }
    });
    this.setState({
      data_medicao_colitoranea: [
        { x: "Janeiro", y: media1 },
        { x: "Fevereiro", y: media2 },
        { x: "Março", y: null },
        { x: "Abril", y: null },
        { x: "Maio", y: null },
        { x: "Junho", y: null },
        { x: "Julho", y: null },
        { x: "Agosto", y: null },
        { x: "Setembro", y: null },
        { x: "Outubro", y: null },
        { x: "Novembro", y: null },
        { x: "Dezembro", y: null },
      ],
    });

    
  }

  componentDidMount() {
    this.getOptionsPraia();
    this.props.retrieveResultadoAreiaGranulometrias();
    this.props.retrieveCorrentelitoraneas();
  }
  render() {

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="end" />
              <h3 style={{ color: "#f9812a" }}>Dashboard</h3> <br />
              <div className="col-lg-5">
                <Select
                  options={this.state.selectOptions}
                  id="praia"
                  name="praia"
                  onChange={this.handleChange.bind(this)}
                />
              </div>{" "}
              <br /> <br />

              {/* Adicionar graficos em baixo */}

              <div className="col-lg-12">
                <Box sx={{ width: 1 }}>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gap={2}
                  >
                    
                    <GraficoTamanhoSedimentoQuantidade praiaId={this.state.currentPraia} />
                    <GraficoTamanhoSedimento praiaId={this.state.currentPraia} />
                    <GraficoMudancaSedimento  praiaId={this.state.currentPraia} />
                    <GraficoDetritos praiaId={this.state.currentPraia} />
                  </Box>
                </Box>
              </div>
           
              <div className="col-lg-10">
                {" "}
                <br />
              {/*   <GraficoOndas praiaId={this.state.currentPraia} /> */}
              </div>
             
              <div className="col-lg-10">
                {" "}
                
                <GraficoCorrentes praiaId={this.state.currentPraia} />
              </div>
              <div className="end" />
              <div className="col-lg-10">
                {" "}
              
                <GraficoVelCorrentes praiaId={this.state.currentPraia} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultadoareiagranulometrias: state.resultadoareiagranulometrias,
    correntelitoraneas: state.correnteslitoraneas,
  };
};

export default connect(mapStateToProps, {
  retrieveResultadoAreiaGranulometrias,
  retrieveCorrentelitoraneas,
  retrieveDetritosPraias,
})(Dashboard);
