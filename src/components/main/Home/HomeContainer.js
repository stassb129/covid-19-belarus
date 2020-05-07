import {connect} from "react-redux";
import Home from './Home';
import React from 'react';
import {init, previouslyInit, toggleIsFetching} from "../../../redux/infected-reducer";
import {setChart} from "../../../redux/chart-reducer";
const axios = require('axios').default;

class HomeContainer extends React.Component {

     getStatToInit = (api, initMethod) =>{
         this.props.toggleIsFetching(false)
        axios.get(api)
            .then((response) => {
                let data = response.data;
                initMethod(data);
                this.props.toggleIsFetching(true);
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

                    isFetching={this.props.isFetching}
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

        isFetching: state.infectedPage.isFetching,
        isCheckChart: state.checkChart.isCheckChart
    }
}


export default connect(mapStateToProps, {
    previouslyInit,
    init,
    setChart,
    toggleIsFetching
})(HomeContainer);
