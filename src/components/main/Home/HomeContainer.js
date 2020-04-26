import {connect} from "react-redux";
import Home from './Home';
import React from 'react';
import {initAC, previouslyInitAC} from "../../../redux/infected-reducer";
import {setChartAC} from "../../../redux/chart-reducer";
const axios = require('axios').default;

class HomeContainer extends React.Component {

     getStatToInit = (api, initMethod) =>{
        axios.get(api)
            .then((response) => {
                let data = response.data;
                console.log(data);
                initMethod(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getStatToInit('https://corona.lmao.ninja/v2/countries/belarus', this.props.init);
        this.getStatToInit('https://corona.lmao.ninja/v2/historical/Belarus?lastdays=30', this.props.previouslyInit);


    }
    render() {

        return (

                <Home
                    confirmed={this.props.confirmed}
                    deaths={this.props.deaths}
                    recovered={this.props.recovered}
                    todayDeaths={this.props.todayDeaths}
                    todayCases={this.props.todayCases}
                    critical={this.props.critical}
                    tests={this.props.tests}
                    checkChart={this.props.checkChart}

                    previouslyConfirmed={this.props.previouslyConfirmed}
                    previouslyDeaths={this.props.previouslyDeaths}
                    previouslyRecovered={this.props.previouslyRecovered}

                    isCheckChart={this.props.isCheckChart}
                    setChart={this.props.setChart}
                    // date={this.props.date}
                />

        );
    }
}

let mapStateToProps = (state) => {
    return {
        confirmed: state.infectedPage.confirmed,
        deaths: state.infectedPage.deaths,
        recovered: state.infectedPage.recovered,
        previouslyConfirmed: state.infectedPage.previouslyConfirmed,
        previouslyDeaths: state.infectedPage.previouslyDeaths,
        previouslyRecovered: state.infectedPage.previouslyRecovered,
        todayDeaths: state.infectedPage.todayDeaths,
        todayCases: state.infectedPage.todayCases,
        critical: state.infectedPage.critical,
        tests: state.infectedPage.tests,

        isCheckChart: state.checkChart.isCheckChart

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        init: (data) => {
            dispatch(initAC(data))
        },
        previouslyInit: (data) =>{
            dispatch(previouslyInitAC(data))
    },
        setChart: () =>{
            dispatch(setChartAC())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
