import React from 'react';
import css from './home.module.scss';
import './../../../App.scss';
import classNames from 'classnames';
import Chart from "../../ Chart/Chart";

const Home = (props) => {


    return (
        <div className="wrapper">
            <div className="container">

                {/*Дата*/}
                <div className={css.date}>
                    <h4>{props.date}</h4>
                </div>
                {/*Лого*/}
                <div className={css.logo}>
                    <span>B</span>
                    <span>E</span>
                    <span>L</span>
                    <span>A</span>
                    <span>R</span>
                    <span>U</span>
                    <span>S</span>
                </div>

                <div className={css.covid}>
                    <span>COVID-19</span>
                </div>

                {/*график*/}
                <div className="chart">
                    <Chart
                        confirmed={props.confirmed}
                        deaths={props.deaths}
                        recovered={props.recovered}/>
                </div>

                {/*Статистика*/}
                <div className={css.statistic}>
                    <div className={css.stat}>
                        <div className={css.statBar}><span>Заражено: </span><span>{props.confirmed}</span></div>
                        <div className={css.statBar}><span>Выздоровело: </span><span>{props.recovered}</span></div>
                        <div className={css.statBar}><span>Смертей: </span><span>{props.deaths}</span></div>
                    </div>
                    <div className={css.picture}> </div>
                </div>



            </div>
        </div>
    )
}

export default Home;
