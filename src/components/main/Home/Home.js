import React from 'react';
import css from './home.module.scss';
import './../../../App.scss';
import classNames from 'classnames';
import Chart from "../../ Chart/Chart";
import CheckBox from "../../CheckBox/CheckBox";
import LinearChart from "../../ Chart/LinearChart";


const Home = (props) => {
    const getDateAndTime = () => {
        let date = new Date()
        let dateTime ={
            date: `${date.getDate()}:${date.getMonth()}:${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`
        }
        return dateTime
    }

    return (
        <div className="wrapper">
            <div className="container">

                {/*Дата*/}
                <div className={css.date}>
                    <div>
                        <h4>{getDateAndTime().date}</h4>
                        {/*<h5>{getDateAndTime().time}</h5>*/}
                    </div>
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
                <CheckBox chartChange={props.setChart}/>

                <div className={css.chart}>

                    {!props.isCheckChart ?
                        <Chart
                        confirmed={props.confirmed}
                        deaths={props.deaths}
                        recovered={props.recovered}/> :

                        <LinearChart
                            previouslyConfirmed={props.previouslyConfirmed}
                            previouslyDeaths={props.previouslyDeaths}
                            previouslyRecovered={props.previouslyRecovered}/>
                    }

                </div>

                {/*Статистика*/}
                <div className={css.statistic}>
                    <div className={css.stat}>
                        <div className={css.mainStatBar}><span>Подтверждено: </span><span>{props.confirmed}</span></div>
                        <div className={css.mainStatBar}><span>Выздоровело: </span><span>{props.recovered}</span></div>
                        <div className={css.mainStatBar}><span>Смертей: </span><span>{props.deaths}</span></div>
                    </div>
                    <div className={css.picture}></div>
                </div>

                <div className={`${css.statistic} ${css.secondStatistic}` }>
                    <div className={css.stat}>
                        <div className={css.statBar}><span>В тяжёлом состоянии: </span><span>{props.critical}</span></div>
                        <div className={css.statBar}><span>Потверждено сегодно: </span><span>{props.todayCases}</span></div>
                        <div className={css.statBar}><span>Умерло сегодня: </span><span>{props.todayDeaths}</span></div>
                        <div className={css.statBar}><span>Проведено тестов: </span><span>{props.tests}</span></div>
                    </div>
                    <div className={css.secondPicture}></div>
                </div>


            </div>
        </div>
    )
}

export default Home;
