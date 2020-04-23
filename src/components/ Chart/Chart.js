import React from 'react';
import { Bar } from 'react-chartjs-2';


const Chart = (props) => {
    let dataSet = {
        labels: ['Confirmed', 'Deaths', 'Recovered'],
        datasets:[
            {
                label: 'Confirmed Statistic',
                data:[
                    props.confirmed,
                    props.deaths,
                    props.recovered
                ],
                backgroundColor:[
                    'rgba(225, 99, 132, 0.6)',
                    'rgba(33, 33, 33, 0.6)',
                    'rgba(76, 175, 80, 0.6)',
                ]
            }
        ]
    }

    return (
        <Bar data={dataSet}
            width={100}
            height={400}
            options={{ maintainAspectRatio: false }}
        />
    )
}

export default Chart;
