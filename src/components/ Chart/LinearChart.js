import React from 'react';
import {Line} from 'react-chartjs-2';


const LinearChart = (props) => {
    let dataSet = {
        labels: Object.keys(props.previouslyConfirmed)
        ,
            datasets: [
            {
                label: 'Заразились',
                lineTension: 0.1,
                backgroundColor: 'rgba(81,92,192,0.0)',
                borderColor: 'rgba(219,87,122,0.6)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(225, 99, 132, 0.6)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255,33,89,0.6)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(props.previouslyConfirmed)
            },
            {
                label: 'Умерли',
                lineTension: 0.1,
                backgroundColor: 'rgba(33,33,33,0)',
                borderColor: 'rgba(24,24,24,0.6)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(22,22,22,0.6)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(17,17,17,0.6)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(props.previouslyDeaths)
            },
            {
                label: 'Выздоровели',
                lineTension: 0.1,
                backgroundColor: 'rgba(67,192,51,0.0)',
                borderColor: 'rgb(81,192,62)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(66,192,62)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(76,192,58)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: Object.values(props.previouslyRecovered)
            }
        ]
    }


    return (

        <Line data={dataSet}
             width={100}
             height={60}
        />




    )
}

export default LinearChart;
