import { Box } from "@mui/system";
import { Component } from "react";
import { DiscreteColorLegend, HorizontalGridLines, VerticalBarSeries, XAxis, XYPlot, YAxis } from "react-vis";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { connect } from "react-redux";
import { retrieveDetritosPraias } from "../../../conection/detritosPraia/actions";
import moment from "moment";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderColor: "black",
  }));

  const minOffset = 0;
  const maxOffset = 60;

   function getDetritos(madeira, plastico, vidro, papel, corda, natural, bolasDeAlcatrao, isopor, pontasDeCigarros, aluminio, borracha) {
    return [
        { x: "Madeira", y: madeira },
        { x: "Plástico", y: plastico },
        { x: "Vidro", y: vidro },
        { x: "Papel", y: papel },
        { x: "Corda", y: corda },
        { x: "Natural", y: natural },
        { x: "Bolas de alcatrão", y: bolasDeAlcatrao },
        { x: "Isopor", y: isopor },
        { x: "Pontas de cigarros", y: pontasDeCigarros  },
        { x: "Alumínio", y: aluminio},
        { x: "Borracha", y: borracha },
    ] 

}

class GraficoDetritos extends Component {
    constructor(props) {
        super(props);

        const year = new Date().getFullYear();
        this.years = Array.from(new Array(50), (val, index) => index + year);

        this.state = {
          currentPraia: null,
          thisYear: new Date().getFullYear(),
          selectedYear: new Date().getFullYear(),
          detritosJan: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosFev: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosMar: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosAbr: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosMai: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosJun: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosJul: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosAgo: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosSet: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosOut: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosNov: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
          detritosDec: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
            };
        }
    

    componentDidMount() {
        this.props.retrieveDetritosPraias();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.praiaId !== this.props.praiaId) {
           this.handleDetritos(this.props.praiaId)
        }

    }
    

    handleDetritos(praiaId){
      
        const resultadoDetritos = this.props.detritos.filter(
            (detrito) => detrito.praia.id === praiaId
          );
      
          let quantidadePlastico = 0;
          let quantidadeMadeira = 0;
          let quantidadeVidro = 0;
          let quantidadePapel = 0;
          let quantidadeCorda = 0;
          let quantidadeNatural = 0;
          let quantidadeBolas = 0;
          let quantidadePontas = 0;
          let quantidadeIsopor = 0;
          let quantidadeAluminio = 0;
          let quantidadeBorracha = 0;
          
      
          let quantidadePlasticoFev = 0;
          let quantidadeMadeiraFev = 0;
          let quantidadeVidroFev = 0;
          let quantidadePapelFev = 0;
          let quantidadeCordaFev = 0;
          let quantidadeNaturalFev = 0;
          let quantidadeBolasFev = 0;
          let quantidadePontasFev = 0;
          let quantidadeIsoporFev = 0;
          let quantidadeAluminioFev = 0;
          let quantidadeBorrachaFev = 0;

          let quantidadePlasticoMar = 0;
          let quantidadeMadeiraMar = 0;
          let quantidadeVidroMar = 0;
          let quantidadePapelMar = 0;
          let quantidadeCordaMar = 0;
          let quantidadeNaturalMar = 0;
          let quantidadeBolasMar = 0;
          let quantidadePontasMar = 0;
          let quantidadeIsoporMar = 0;
          let quantidadeAluminioMar = 0;
          let quantidadeBorrachaMar = 0;

          let quantidadePlasticoAbr = 0;
          let quantidadeMadeiraAbr = 0;
          let quantidadeVidroAbr = 0;
          let quantidadePapelAbr = 0;
          let quantidadeCordaAbr = 0;
          let quantidadeNaturalAbr = 0;
          let quantidadeBolasAbr = 0;
          let quantidadePontasAbr = 0;
          let quantidadeIsoporAbr = 0;
          let quantidadeAluminioAbr = 0;
          let quantidadeBorrachaAbr = 0;

          let quantidadePlasticoMai = 0;
          let quantidadeMadeiraMai = 0;
          let quantidadeVidroMai = 0;
          let quantidadePapelMai = 0;
          let quantidadeCordaMai = 0;
          let quantidadeNaturalMai = 0;
          let quantidadeBolasMai = 0;
          let quantidadePontasMai = 0;
          let quantidadeIsoporMai = 0;
          let quantidadeAluminioMai = 0;
          let quantidadeBorrachaMai = 0;

          let quantidadePlasticoJun = 0;
          let quantidadeMadeiraJun = 0;
          let quantidadeVidroJun = 0;
          let quantidadePapelJun = 0;
          let quantidadeCordaJun = 0;
          let quantidadeNaturalJun = 0;
          let quantidadeBolasJun = 0;
          let quantidadePontasJun = 0;
          let quantidadeIsoporJun = 0;
          let quantidadeAluminioJun = 0;
          let quantidadeBorrachaJun = 0;

          let quantidadePlasticoJul = 0;
          let quantidadeMadeiraJul = 0;
          let quantidadeVidroJul = 0;
          let quantidadePapelJul = 0;
          let quantidadeCordaJul = 0;
          let quantidadeNaturalJul = 0;
          let quantidadeBolasJul = 0;
          let quantidadePontasJul = 0;
          let quantidadeIsoporJul = 0;
          let quantidadeAluminioJul = 0;
          let quantidadeBorrachaJul = 0;

          let quantidadePlasticoAgo = 0;
          let quantidadeMadeiraAgo = 0;
          let quantidadeVidroAgo = 0;
          let quantidadePapelAgo = 0;
          let quantidadeCordaAgo = 0;
          let quantidadeNaturalAgo = 0;
          let quantidadeBolasAgo = 0;
          let quantidadePontasAgo = 0;
          let quantidadeIsoporAgo = 0;
          let quantidadeAluminioAgo = 0;
          let quantidadeBorrachaAgo = 0;

          let quantidadePlasticoSet = 0;
          let quantidadeMadeiraSet = 0;
          let quantidadeVidroSet = 0;
          let quantidadePapelSet = 0;
          let quantidadeCordaSet = 0;
          let quantidadeNaturalSet = 0;
          let quantidadeBolasSet = 0;
          let quantidadePontasSet = 0;
          let quantidadeIsoporSet = 0;
          let quantidadeAluminioSet = 0;
          let quantidadeBorrachaSet = 0;

          let quantidadePlasticoOut = 0;
          let quantidadeMadeiraOut = 0;
          let quantidadeVidroOut = 0;
          let quantidadePapelOut = 0;
          let quantidadeCordaOut = 0;
          let quantidadeNaturalOut = 0;
          let quantidadeBolasOut = 0;
          let quantidadePontasOut = 0;
          let quantidadeIsoporOut = 0;
          let quantidadeAluminioOut = 0;
          let quantidadeBorrachaOut = 0;

          let quantidadePlasticoNov = 0;
          let quantidadeMadeiraNov = 0;
          let quantidadeVidroNov = 0;
          let quantidadePapelNov = 0;
          let quantidadeCordaNov = 0;
          let quantidadeNaturalNov = 0;
          let quantidadeBolasNov = 0;
          let quantidadePontasNov = 0;
          let quantidadeIsoporNov = 0;
          let quantidadeAluminioNov = 0;
          let quantidadeBorrachaNov = 0;

          let quantidadePlasticoDec = 0;
          let quantidadeMadeiraDec = 0;
          let quantidadeVidroDec = 0;
          let quantidadePapelDec = 0;
          let quantidadeCordaDec = 0;
          let quantidadeNaturalDec = 0;
          let quantidadeBolasDec = 0;
          let quantidadePontasDec = 0;
          let quantidadeIsoporDec = 0;
          let quantidadeAluminioDec = 0;
          let quantidadeBorrachaDec = 0;
  
          
          this.InitializeDetritoState('Jan');
          this.InitializeDetritoState('Fev');
          this.InitializeDetritoState('Mar');
          this.InitializeDetritoState('Abr');
          this.InitializeDetritoState('Mai');
          this.InitializeDetritoState('Jun');
          this.InitializeDetritoState('Jul');
          this.InitializeDetritoState('Ago');
          this.InitializeDetritoState('Set');
          this.InitializeDetritoState('Out');
          this.InitializeDetritoState('Nov');
          this.InitializeDetritoState('Dec');

          resultadoDetritos.forEach((item) => {
            
            if (moment(item.date).format("MMMM") === "January") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlastico += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeira += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidro += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapel += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCorda += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNatural += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsopor += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminio += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorracha += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolas += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontas += item.quantity;
              }

            }
      
      
            if (moment(item.date).format("MMMM") === "February") {
              if (item.detrito.name_detrito === "Plastico") {
                quantidadePlasticoFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporFev += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasFev += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasFev += item.quantity;
              }
            }

            if (moment(item.date).format("MMMM") === "March") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporMar += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasMar += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasMar += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "April") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporAbr += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasAbr += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasAbr += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "May") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporMai += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasMai += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasMai += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "June") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporJun += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasJun += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasJun += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "July") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporJul += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasJul += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasJul += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "August") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporAgo += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasAgo += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasAgo += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "September") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporSet += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasSet += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasSet += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "October") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporOut += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasOut += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasOut += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "November") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporNov += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasNov += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasNov += item.quantity;
              }

            }

            if (moment(item.date).format("MMMM") === "December") {
              if (item.detrito.name_detrito === "Plástico") {
                quantidadePlasticoDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Madeira") {
                quantidadeMadeiraDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Vidro") {
                quantidadeVidroDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Papel") {
                quantidadePapelDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Corda") {
                quantidadeCordaDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Natural") {
                quantidadeNaturalDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Isopor(esferovite)") {
                quantidadeIsoporDec += item.quantity;
              }

              if (item.detrito.name_detrito === "Alumínio") {
                quantidadeAluminioDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Borracha") {
                quantidadeBorrachaDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Bolas de alcatrão") {
                quantidadeBolasDec += item.quantity;
              }
              if (item.detrito.name_detrito === "Pontas de cigarros") {
                quantidadePontasDec += item.quantity;
              }

            }  
      
          });
      
          this.UpdateDetritoState('Jan', quantidadeMadeira, quantidadePlastico, quantidadeVidro, quantidadePapel, quantidadeCorda,
          quantidadeNatural, quantidadeBolas, quantidadePontas, quantidadeIsopor, quantidadeAluminio, quantidadeBorracha)

          this.UpdateDetritoState('Fev', quantidadeMadeiraFev, quantidadePlasticoFev, quantidadeVidroFev, quantidadePapelFev, quantidadeCordaFev,
          quantidadeNaturalFev, quantidadeBolasFev, quantidadePontasFev, quantidadeIsoporFev, quantidadeAluminioFev, quantidadeBorrachaFev)

          this.UpdateDetritoState('Mar', quantidadeMadeiraMar, quantidadePlasticoMar, quantidadeVidroMar, quantidadePapelMar, quantidadeCordaMar,
          quantidadeNaturalMar, quantidadeBolasMar, quantidadePontasMar, quantidadeIsoporMar, quantidadeAluminioMar, quantidadeBorrachaMar)

          this.UpdateDetritoState('Abr', quantidadeMadeiraAbr, quantidadePlasticoAbr, quantidadeVidroAbr, quantidadePapelAbr, quantidadeCordaAbr,
          quantidadeNaturalAbr, quantidadeBolasAbr, quantidadePontasAbr, quantidadeIsoporAbr, quantidadeAluminioAbr, quantidadeBorrachaAbr)

          this.UpdateDetritoState('Mai', quantidadeMadeiraMai, quantidadePlasticoMai, quantidadeVidroMai, quantidadePapelMai, quantidadeCordaMai,
          quantidadeNaturalMai, quantidadeBolasMai, quantidadePontasMai, quantidadeIsoporMai, quantidadeAluminioMai, quantidadeBorrachaMai)

          this.UpdateDetritoState('Jun', quantidadeMadeiraJun, quantidadePlasticoJun, quantidadeVidroJun, quantidadePapelJun, quantidadeCordaJun,
          quantidadeNaturalJun, quantidadeBolasJun, quantidadePontasJun, quantidadeIsoporJun, quantidadeAluminioJun, quantidadeBorrachaJun)
          
          this.UpdateDetritoState('Jul', quantidadeMadeiraJul, quantidadePlasticoJul, quantidadeVidroJul, quantidadePapelJul, quantidadeCordaJul,
          quantidadeNaturalJul, quantidadeBolasJul, quantidadePontasJul, quantidadeIsoporJul, quantidadeAluminioJul, quantidadeBorrachaJul)

          this.UpdateDetritoState('Ago', quantidadeMadeiraAgo, quantidadePlasticoAgo, quantidadeVidroAgo, quantidadePapelAgo, quantidadeCordaAgo,
          quantidadeNaturalAgo, quantidadeBolasAgo, quantidadePontasAgo, quantidadeIsoporAgo, quantidadeAluminioAgo, quantidadeBorrachaAgo)

          this.UpdateDetritoState('Set', quantidadeMadeiraSet, quantidadePlasticoSet, quantidadeVidroSet, quantidadePapelSet, quantidadeCordaSet,
          quantidadeNaturalSet, quantidadeBolasSet, quantidadePontasSet, quantidadeIsoporSet, quantidadeAluminioSet, quantidadeBorrachaSet)

          this.UpdateDetritoState('Out', quantidadeMadeiraOut, quantidadePlasticoOut, quantidadeVidroOut, quantidadePapelOut, quantidadeCordaOut,
          quantidadeNaturalOut, quantidadeBolasOut, quantidadePontasOut, quantidadeIsoporOut, quantidadeAluminioOut, quantidadeBorrachaOut)

          this.UpdateDetritoState('Nov', quantidadeMadeiraNov, quantidadePlasticoNov, quantidadeVidroNov, quantidadePapelNov, quantidadeCordaNov,
          quantidadeNaturalNov, quantidadeBolasNov, quantidadePontasNov, quantidadeIsoporNov, quantidadeAluminioNov, quantidadeBorrachaNov)

          this.UpdateDetritoState('Dec', quantidadeMadeiraDec, quantidadePlasticoDec, quantidadeVidroDec, quantidadePapelDec, quantidadeCordaDec,
          quantidadeNaturalDec, quantidadeBolasDec, quantidadePontasDec, quantidadeIsoporDec, quantidadeAluminioDec, quantidadeBorrachaDec)

  }

  dateHandleDetritos(event){
      console.log(this.props)
    const resultadoDetritos = this.props.detritos.filter(
        (detrito) => detrito.praia.id === this.props.praiaId
      );
  
      let quantidadePlastico = 0;
      let quantidadeMadeira = 0;
      let quantidadeVidro = 0;
      let quantidadePapel = 0;
      let quantidadeCorda = 0;
      let quantidadeNatural = 0;
      let quantidadeBolas = 0;
      let quantidadePontas = 0;
      let quantidadeIsopor = 0;
      let quantidadeAluminio = 0;
      let quantidadeBorracha = 0;
      
  
      let quantidadePlasticoFev = 0;
      let quantidadeMadeiraFev = 0;
      let quantidadeVidroFev = 0;
      let quantidadePapelFev = 0;
      let quantidadeCordaFev = 0;
      let quantidadeNaturalFev = 0;
      let quantidadeBolasFev = 0;
      let quantidadePontasFev = 0;
      let quantidadeIsoporFev = 0;
      let quantidadeAluminioFev = 0;
      let quantidadeBorrachaFev = 0;

      let quantidadePlasticoMar = 0;
      let quantidadeMadeiraMar = 0;
      let quantidadeVidroMar = 0;
      let quantidadePapelMar = 0;
      let quantidadeCordaMar = 0;
      let quantidadeNaturalMar = 0;
      let quantidadeBolasMar = 0;
      let quantidadePontasMar = 0;
      let quantidadeIsoporMar = 0;
      let quantidadeAluminioMar = 0;
      let quantidadeBorrachaMar = 0;

      let quantidadePlasticoAbr = 0;
      let quantidadeMadeiraAbr = 0;
      let quantidadeVidroAbr = 0;
      let quantidadePapelAbr = 0;
      let quantidadeCordaAbr = 0;
      let quantidadeNaturalAbr = 0;
      let quantidadeBolasAbr = 0;
      let quantidadePontasAbr = 0;
      let quantidadeIsoporAbr = 0;
      let quantidadeAluminioAbr = 0;
      let quantidadeBorrachaAbr = 0;

      let quantidadePlasticoMai = 0;
      let quantidadeMadeiraMai = 0;
      let quantidadeVidroMai = 0;
      let quantidadePapelMai = 0;
      let quantidadeCordaMai = 0;
      let quantidadeNaturalMai = 0;
      let quantidadeBolasMai = 0;
      let quantidadePontasMai = 0;
      let quantidadeIsoporMai = 0;
      let quantidadeAluminioMai = 0;
      let quantidadeBorrachaMai = 0;

      let quantidadePlasticoJun = 0;
      let quantidadeMadeiraJun = 0;
      let quantidadeVidroJun = 0;
      let quantidadePapelJun = 0;
      let quantidadeCordaJun = 0;
      let quantidadeNaturalJun = 0;
      let quantidadeBolasJun = 0;
      let quantidadePontasJun = 0;
      let quantidadeIsoporJun = 0;
      let quantidadeAluminioJun = 0;
      let quantidadeBorrachaJun = 0;

      let quantidadePlasticoJul = 0;
      let quantidadeMadeiraJul = 0;
      let quantidadeVidroJul = 0;
      let quantidadePapelJul = 0;
      let quantidadeCordaJul = 0;
      let quantidadeNaturalJul = 0;
      let quantidadeBolasJul = 0;
      let quantidadePontasJul = 0;
      let quantidadeIsoporJul = 0;
      let quantidadeAluminioJul = 0;
      let quantidadeBorrachaJul = 0;

      let quantidadePlasticoAgo = 0;
      let quantidadeMadeiraAgo = 0;
      let quantidadeVidroAgo = 0;
      let quantidadePapelAgo = 0;
      let quantidadeCordaAgo = 0;
      let quantidadeNaturalAgo = 0;
      let quantidadeBolasAgo = 0;
      let quantidadePontasAgo = 0;
      let quantidadeIsoporAgo = 0;
      let quantidadeAluminioAgo = 0;
      let quantidadeBorrachaAgo = 0;

      let quantidadePlasticoSet = 0;
      let quantidadeMadeiraSet = 0;
      let quantidadeVidroSet = 0;
      let quantidadePapelSet = 0;
      let quantidadeCordaSet = 0;
      let quantidadeNaturalSet = 0;
      let quantidadeBolasSet = 0;
      let quantidadePontasSet = 0;
      let quantidadeIsoporSet = 0;
      let quantidadeAluminioSet = 0;
      let quantidadeBorrachaSet = 0;

      let quantidadePlasticoOut = 0;
      let quantidadeMadeiraOut = 0;
      let quantidadeVidroOut = 0;
      let quantidadePapelOut = 0;
      let quantidadeCordaOut = 0;
      let quantidadeNaturalOut = 0;
      let quantidadeBolasOut = 0;
      let quantidadePontasOut = 0;
      let quantidadeIsoporOut = 0;
      let quantidadeAluminioOut = 0;
      let quantidadeBorrachaOut = 0;

      let quantidadePlasticoNov = 0;
      let quantidadeMadeiraNov = 0;
      let quantidadeVidroNov = 0;
      let quantidadePapelNov = 0;
      let quantidadeCordaNov = 0;
      let quantidadeNaturalNov = 0;
      let quantidadeBolasNov = 0;
      let quantidadePontasNov = 0;
      let quantidadeIsoporNov = 0;
      let quantidadeAluminioNov = 0;
      let quantidadeBorrachaNov = 0;

      let quantidadePlasticoDec = 0;
      let quantidadeMadeiraDec = 0;
      let quantidadeVidroDec = 0;
      let quantidadePapelDec = 0;
      let quantidadeCordaDec = 0;
      let quantidadeNaturalDec = 0;
      let quantidadeBolasDec = 0;
      let quantidadePontasDec = 0;
      let quantidadeIsoporDec = 0;
      let quantidadeAluminioDec = 0;
      let quantidadeBorrachaDec = 0;

      
      this.InitializeDetritoState('Jan');
      this.InitializeDetritoState('Fev');
      this.InitializeDetritoState('Mar');
      this.InitializeDetritoState('Abr');
      this.InitializeDetritoState('Mai');
      this.InitializeDetritoState('Jun');
      this.InitializeDetritoState('Jul');
      this.InitializeDetritoState('Ago');
      this.InitializeDetritoState('Set');
      this.InitializeDetritoState('Out');
      this.InitializeDetritoState('Nov');
      this.InitializeDetritoState('Dec');

      resultadoDetritos.forEach((item) => {
        if (moment(item.date).format("YYYY") === event.target.value) {
        if (moment(item.date).format("MMMM") === "January") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlastico += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeira += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidro += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapel += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCorda += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNatural += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsopor += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminio += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorracha += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolas += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontas += item.quantity;
          }

        }
  
  
        if (moment(item.date).format("MMMM") === "February") {
          if (item.detrito.name_detrito === "Plastico") {
            quantidadePlasticoFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporFev += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasFev += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasFev += item.quantity;
          }
        }

        if (moment(item.date).format("MMMM") === "March") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporMar += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasMar += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasMar += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "April") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporAbr += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasAbr += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasAbr += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "May") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporMai += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasMai += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasMai += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "June") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporJun += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasJun += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasJun += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "July") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporJul += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasJul += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasJul += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "August") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporAgo += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasAgo += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasAgo += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "September") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporSet += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasSet += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasSet += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "October") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporOut += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasOut += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasOut += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "November") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporNov += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasNov += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasNov += item.quantity;
          }

        }

        if (moment(item.date).format("MMMM") === "December") {
          if (item.detrito.name_detrito === "Plástico") {
            quantidadePlasticoDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Madeira") {
            quantidadeMadeiraDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Vidro") {
            quantidadeVidroDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Papel") {
            quantidadePapelDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Corda") {
            quantidadeCordaDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Natural") {
            quantidadeNaturalDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Isopor(esferovite)") {
            quantidadeIsoporDec += item.quantity;
          }

          if (item.detrito.name_detrito === "Alumínio") {
            quantidadeAluminioDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Borracha") {
            quantidadeBorrachaDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Bolas de alcatrão") {
            quantidadeBolasDec += item.quantity;
          }
          if (item.detrito.name_detrito === "Pontas de cigarros") {
            quantidadePontasDec += item.quantity;
          }

        }  
  
      }
    });
  
      this.UpdateDetritoState('Jan', quantidadeMadeira, quantidadePlastico, quantidadeVidro, quantidadePapel, quantidadeCorda,
      quantidadeNatural, quantidadeBolas, quantidadePontas, quantidadeIsopor, quantidadeAluminio, quantidadeBorracha)

      this.UpdateDetritoState('Fev', quantidadeMadeiraFev, quantidadePlasticoFev, quantidadeVidroFev, quantidadePapelFev, quantidadeCordaFev,
      quantidadeNaturalFev, quantidadeBolasFev, quantidadePontasFev, quantidadeIsoporFev, quantidadeAluminioFev, quantidadeBorrachaFev)

      this.UpdateDetritoState('Mar', quantidadeMadeiraMar, quantidadePlasticoMar, quantidadeVidroMar, quantidadePapelMar, quantidadeCordaMar,
      quantidadeNaturalMar, quantidadeBolasMar, quantidadePontasMar, quantidadeIsoporMar, quantidadeAluminioMar, quantidadeBorrachaMar)

      this.UpdateDetritoState('Abr', quantidadeMadeiraAbr, quantidadePlasticoAbr, quantidadeVidroAbr, quantidadePapelAbr, quantidadeCordaAbr,
      quantidadeNaturalAbr, quantidadeBolasAbr, quantidadePontasAbr, quantidadeIsoporAbr, quantidadeAluminioAbr, quantidadeBorrachaAbr)

      this.UpdateDetritoState('Mai', quantidadeMadeiraMai, quantidadePlasticoMai, quantidadeVidroMai, quantidadePapelMai, quantidadeCordaMai,
      quantidadeNaturalMai, quantidadeBolasMai, quantidadePontasMai, quantidadeIsoporMai, quantidadeAluminioMai, quantidadeBorrachaMai)

      this.UpdateDetritoState('Jun', quantidadeMadeiraJun, quantidadePlasticoJun, quantidadeVidroJun, quantidadePapelJun, quantidadeCordaJun,
      quantidadeNaturalJun, quantidadeBolasJun, quantidadePontasJun, quantidadeIsoporJun, quantidadeAluminioJun, quantidadeBorrachaJun)
      
      this.UpdateDetritoState('Jul', quantidadeMadeiraJul, quantidadePlasticoJul, quantidadeVidroJul, quantidadePapelJul, quantidadeCordaJul,
      quantidadeNaturalJul, quantidadeBolasJul, quantidadePontasJul, quantidadeIsoporJul, quantidadeAluminioJul, quantidadeBorrachaJul)

      this.UpdateDetritoState('Ago', quantidadeMadeiraAgo, quantidadePlasticoAgo, quantidadeVidroAgo, quantidadePapelAgo, quantidadeCordaAgo,
      quantidadeNaturalAgo, quantidadeBolasAgo, quantidadePontasAgo, quantidadeIsoporAgo, quantidadeAluminioAgo, quantidadeBorrachaAgo)

      this.UpdateDetritoState('Set', quantidadeMadeiraSet, quantidadePlasticoSet, quantidadeVidroSet, quantidadePapelSet, quantidadeCordaSet,
      quantidadeNaturalSet, quantidadeBolasSet, quantidadePontasSet, quantidadeIsoporSet, quantidadeAluminioSet, quantidadeBorrachaSet)

      this.UpdateDetritoState('Out', quantidadeMadeiraOut, quantidadePlasticoOut, quantidadeVidroOut, quantidadePapelOut, quantidadeCordaOut,
      quantidadeNaturalOut, quantidadeBolasOut, quantidadePontasOut, quantidadeIsoporOut, quantidadeAluminioOut, quantidadeBorrachaOut)

      this.UpdateDetritoState('Nov', quantidadeMadeiraNov, quantidadePlasticoNov, quantidadeVidroNov, quantidadePapelNov, quantidadeCordaNov,
      quantidadeNaturalNov, quantidadeBolasNov, quantidadePontasNov, quantidadeIsoporNov, quantidadeAluminioNov, quantidadeBorrachaNov)

      this.UpdateDetritoState('Dec', quantidadeMadeiraDec, quantidadePlasticoDec, quantidadeVidroDec, quantidadePapelDec, quantidadeCordaDec,
      quantidadeNaturalDec, quantidadeBolasDec, quantidadePontasDec, quantidadeIsoporDec, quantidadeAluminioDec, quantidadeBorrachaDec)

}

  UpdateDetritoState(month, madeira, plastico, vidro, papel, corda, natural, bolasDeAlcatrao, isopor, pontasDeCigarros, aluminio, borracha) {
    this.setState({
        [`detritos${month}`]: getDetritos(madeira, plastico, vidro, papel, corda, natural, bolasDeAlcatrao, isopor, pontasDeCigarros, aluminio, borracha)
    });
}

InitializeDetritoState(month) {
  this.setState({
      [`detritos${month}`]: getDetritos(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
  });
}
    render() {
            
      const { thisYear, selectedYear } = this.state;
      const options = [];

      for (let i = minOffset; i <= maxOffset; i++) {
        const year = thisYear - i;
        options.push(<option value={year}>{year}</option>);
      }

        return(
            <Box gridColumn="span 12">
            <Item>
              <p1>Detritos (Quantidade)</p1>
              <div className="col-lg-2">
            <select
              options={this.selectedYear}
              onChange={this.dateHandleDetritos.bind(this)}
            >
              {options}
            </select>{" "}
            </div>
              <center>
                <XYPlot
                  className="clustered-stacked-bar-chart-example"
                  xType="ordinal"
                  color="#B8E3FF"
                  stroke="#51ACC5"
                  width={1000}
                  height={314}
                >
                  <DiscreteColorLegend
                    style={{
                      position: "absolute",
                      left: "100%",
                      top: "-10%",
                    }}
                    width={100}
                    items={[
                      {
                        title: "Jan",
                        color: "#12939A",
                      },
                      {
                        title: "Fev",
                        color: "#79C7E3",
                      },
                      {
                        title: "Mar",
                        color: "#ff0000",
                      },
                      {
                        title: "Ari",
                        color: "#800000",
                      },
                      {
                        title: "Mai",
                        color: "#800080",
                      },
                      {
                        title: "Jun",
                        color: "#ffa500",
                      },
                    ]}
                  />
                  <DiscreteColorLegend
                    style={{
                      position: "absolute",
                      left: "110%",
                      top: "-10%",
                    }}
                    width={100}
                    items={[
                      {
                        title: "Jul",
                        color: "#008000",
                      },
                      {
                        title: "Ago",
                        color: "#00ff00",
                      },
                      {
                        title: "Set",
                        color: "#808000",
                      },
                      {
                        title: "Out",
                        color: "#ffff00",
                      },
                      {
                        title: "Nov",
                        color: "#000080",
                      },
                      {
                        title: "Dec",
                        color: "#0000ff",
                      },
                    ]}
                  />
                  <YAxis title="Quantidade" />
                  <HorizontalGridLines />
                  <XAxis />
                  <VerticalBarSeries
                    cluster="Jan"
                    data={[
                      { x: "", y: "" },
                      ...this.state.detritosJan,
                    ]}
                    color="#12939A"
                  />
                  <VerticalBarSeries
                    cluster="Fev"
                    data={[
                      { x: "", y: "" },
                      ...this.state.detritosFev,
                    ]}
                    color="#79C7E3"
                  />

                  <VerticalBarSeries
                    cluster="Mar"
                    data={[
                      { x: "", y: "" },
                      ...this.state.detritosMar,
                    ]}
                    color="#ff0000"
                  />

                  
                  <VerticalBarSeries
                    cluster="Ari"
                    data={[
                      { x: "", y: "" },
                      ...this.state.detritosAbr,
                    ]}
                    color="#800000"
                  />

                  <VerticalBarSeries
                  cluster="Mai"
                  data={[
                    { x: "", y: "" },
                    ...this.state.detritosMai,
                  ]}
                  color="#800080"
                />

                <VerticalBarSeries
                cluster="Jun"
                data={[
                  { x: "", y: "" },
                  ...this.state.detritosJun,
                ]}
                color="#ffa500"
              />

              <VerticalBarSeries
              cluster="Jul"
              data={[
                { x: "", y: "" },
                ...this.state.detritosJul,
              ]}
              color="#008000"
            />

            <VerticalBarSeries
              cluster="Ago"
              data={[
                { x: "", y: "" },
                ...this.state.detritosAgo,
              ]}
              color="#00ff00"
            />

            <VerticalBarSeries
              cluster="Set"
              data={[
                { x: "", y: "" },
                ...this.state.detritosSet,
              ]}
              color="#808000"
            />

            <VerticalBarSeries
            cluster="Out"
            data={[
              { x: "", y: "" },
              ...this.state.detritosOut,
            ]}
            color="#ffff00"
            />
            <VerticalBarSeries
            cluster="Nov"
            data={[
              { x: "", y: "" },
              ...this.state.detritosNov,
            ]}
            color="#000080"
            />

            <VerticalBarSeries
            cluster="Dec"
            data={[
              { x: "", y: "" },
              ...this.state.detritosDec,
            ]}
            color="#0000ff"
            />
                </XYPlot>
              </center>
            </Item>
          </Box>
        )
    }
}


const mapStateToprops = state => ({
    detritos: state.detritosPraias
});


export default connect(mapStateToprops, {retrieveDetritosPraias})(GraficoDetritos);
