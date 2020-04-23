import {connect} from "react-redux";
import Home from './Home';
import React from 'react';
import {initAC} from "../../../redux/infected-reducer";
const axios = require('axios').default;

class HomeContainer extends React.Component {
    componentDidMount() {
        axios.get('https://api.covid19api.com/live/country/belarus/status/confirmed')
            .then((response) => {
                let data = response.data[response.data.length-1];
                console.log(data);
                this.props.init(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (

                <Home
                    confirmed={this.props.confirmed}
                    deaths={this.props.deaths}
                    recovered={this.props.recovered}
                    date={this.props.date}
                />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        confirmed: state.infectedPage.confirmed,
        deaths: state.infectedPage.deaths,
        recovered: state.infectedPage.recovered,
        date: state.infectedPage.date
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        init: (data) => {
            dispatch(initAC(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
