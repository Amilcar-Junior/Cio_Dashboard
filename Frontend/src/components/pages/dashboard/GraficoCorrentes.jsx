import { components } from "react-select";
import { retrieveCorrentelitoraneas } from "../../../conection/correnteslitoraneas/actions";
import moment from "moment";
import Box from "@mui/material/Box";
import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
} from "react-vis";
import { Item } from "./Item";

const minOffset = 0;
const maxOffset = 60;

class GraficoCorrentes extends Component {
    constructor(props) {
        super(props);
        const year = new Date().getFullYear();
        this.years = Array.from(new Array(50), (val, index) => index + year);

        this.state = {
            selectOptions: [],
            thisYear: new Date().getFullYear(),
            selectedYear: new Date().getFullYear(),
            data_medicao_colitoranea: [
                { x: 'Janeiro', y: null },
                { x: 'Fevereiro', y: null },
                { x: 'Março', y: null },
                { x: 'Abril', y: null },
                { x: 'Maio', y: null },
                { x: 'Junho', y: null },
                { x: 'Julho', y: null },
                { x: 'Agosto', y: null },
                { x: 'Setembro', y: null },
                { x: 'Outubro', y: null },
                { x: 'Novembro', y: null },
                { x: 'Dezembro', y: null },],
        };
    }
    componentDidMount() {
        this.props.retrieveCorrentelitoraneas();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.praiaId !== this.props.praiaId) {
            this.onHandleChange(this.props.praiaId)
        }
    }

    onHandleChange = (praiaId) => {
        const corrente = this.props.correntelitoraneas.filter(resultado => resultado.praia.id === praiaId)
        console.log(corrente)

        let Valor1 = 0
        let Valor2 = 0
        let soma1 = 0
        let media1 = 0
        let x = 0
        let Valor3 = 0
        let Valor4 = 0
        let soma2 = 0
        let media2 = 0
        let x1 = 0
        corrente.map(e => {
            if (moment(e.date).format('MMMM YYYY') == 'January 2022') {
                x = +1
                Valor1 = Valor1 + e.direction_after_5_minutes
                Valor2 = Valor2 + e.direction_after_1_minute
                soma1 = Valor1 + Valor2
                media1 = soma1 / x
            } else if (moment(e.date).format('MMMM YYYY') == 'February n2022') {
                x = +1
                Valor3 = Valor3 + e.direction_after_5_minutes
                Valor4 = Valor4 + e.direction_after_1_minute
                soma2 = Valor3 + Valor4
                media2 = soma2 / x1
            }
        })
        this.setState({
            data_medicao_colitoranea: [{ x: 'Janeiro', y: media1 }, { x: 'Fevereiro', y: media2 }, { x: 'Março', y: null }, { x: 'Abril', y: null }, { x: 'Maio', y: null },
            { x: 'Junho', y: null }, { x: 'Julho', y: null }, { x: 'Agosto', y: null }, { x: 'Setembro', y: null }, { x: 'Outubro', y: null }, { x: 'Novembro', y: null }, { x: 'Dezembro', y: null },]
        })
    };
    render() {
        const { thisYear, selectedYear } = this.state;
        const options = [];

        for (let i = minOffset; i <= maxOffset; i++) {
            const year = thisYear - i;
            options.push(<option value={year}>{year}</option>);
        }
        return (
            <Box sx={{ flexGrow: 1 }}>

                <Item>
                    <p1>Gráfico de barras das variações de
                        direção de correntes litorâneas ao longo do tempo</p1>
                    <div className="col-lg-2">
                        <select
                            options={this.selectedYear}
                            onChange={this.onHandleChange}>
                            {options}
                        </select> </div>
                    <center><XYPlot
                        className="clustered-stacked-bar-chart-example"
                        xType="ordinal"
                        color='#FABB51'
                        stroke='#F47340'
                        width={950}
                        height={350} >
                        <YAxis title="Direção(graus)" />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-28} />
                        <VerticalBarSeries
                            cluster="2016"
                            data={[{ x: '', y: '' }, ...this.state.data_medicao_colitoranea]}
                        />
                    </XYPlot></center> </Item>
            </Box>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        correntelitoraneas: state.correnteslitoraneas,
    };
};
export default connect(mapStateToProps, {
    retrieveCorrentelitoraneas
})(GraficoCorrentes);