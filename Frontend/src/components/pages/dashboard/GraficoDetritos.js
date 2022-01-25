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


function getDetritos(madeira, plastico, vidro, papel, corda, natural) {
    return [
        { x: "Madeira", y: madeira },
        { x: "Plástico", y: plastico },
        { x: "Vidro", y: vidro },
        { x: "Papel", y: papel },
        { x: "Corda", y: corda },
        { x: "Natural", y: natural },
    ]
}

class GraficoDetritos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detritosJan: getDetritos(0, 0, 0, 0, 0, 0),
            detritosFev: getDetritos(0, 0, 0, 0, 0, 0)
        };
    }


    componentDidMount() {
        this.props.retrieveDetritosPraias();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.praiaId !== this.props.praiaId) {
            this.handleDetritos(this.props.praiaId)
        }
    }

    handleDetritos(praiaId) {
        const resultadoDetritos = this.props.detritos.filter(
            (detrito) => detrito.praia.id === praiaId
        );

        let quantidadePlastico = 0;
        let quantidadeMadeira = 0;
        let quantidadeVidro = 0;

        let quantidadePlasticoFev = 0;
        let quantidadeMadeiraFev = 0;
        let quantidadeVidroFev = 0;

        this.InitializeDetritoState('Jan');
        this.InitializeDetritoState('Fev');

        resultadoDetritos.forEach((item) => {
            if (moment(item.date).format("MMMM") === "January") {
                if (item.detrito.name_detrito === "Plastico") {
                    quantidadePlastico += item.quantity;
                } else if (item.detrito.name_detrito === "Madeira") {
                    quantidadeMadeira += item.quantity;
                } else if (item.detrito.name_detrito === "Vidro") {
                    quantidadeVidro += item.quantity;
                }
            }

            if (moment(item.date).format("MMMM") === "February") {
                if (item.detrito.name_detrito === "Plastico") {
                    quantidadePlasticoFev += item.quantity;
                } else if (item.detrito.name_detrito === "Madeira") {
                    quantidadeMadeiraFev += item.quantity;
                } else if (item.detrito.name_detrito === "Vidro") {
                    quantidadeVidroFev += item.quantity;
                }
            }
        });

        this.UpdateDetritoState('Jan', quantidadeMadeira, quantidadePlastico, quantidadeVidro)
        this.UpdateDetritoState('Fev', quantidadeMadeiraFev, quantidadePlasticoFev, quantidadeVidroFev)
    }

    UpdateDetritoState(month, madeira, plastico, vidro) {
        this.setState({
            [`detritos${month}`]: getDetritos(madeira, plastico, vidro, 0, 0, 0)
        });
    }

    InitializeDetritoState(month) {
        this.setState({
            [`detritos${month}`]: getDetritos(0, 0, 0, 0, 0, 0)
        });
    }

    render() {
        return (
            <Box gridColumn="span 6">
                <Item>
                    <p1>Detritos (Quantidade)</p1>
                    <center>
                        <XYPlot
                            className="clustered-stacked-bar-chart-example"
                            xType="ordinal"
                            color="#B8E3FF"
                            stroke="#51ACC5"
                            width={450}
                            height={314}
                        >
                            <DiscreteColorLegend
                                style={{
                                    position: "absolute",
                                    left: "100%",
                                    top: "50%",
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

export default connect(mapStateToprops, { retrieveDetritosPraias })(GraficoDetritos);