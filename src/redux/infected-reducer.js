export const INIT = 'INIT';
export const PREVIOUSLY_INIT = 'PREVIOUSLY_INIT'

const dateTranslate = (date) => {
    let outDate = {
        date: '',
        time: ''
    }
    let dCheck = true;
    let tCheck = false;

    for (let i=0; i<date.length; i++){
        if((date[i] !== 'T') && (dCheck === true)){
            outDate.date+=date[i];
        }else {
            dCheck = false;
            tCheck = true;
        }
        if((date[i] !== 'Z') && (tCheck === true) && (date[i] !== 'T')){
            outDate.time+=date[i];
        }
    }
    return outDate
}

const initialState = {

    previouslyConfirmed: {},
    previouslyDeaths: {},
    previouslyRecovered: {},
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    todayDeaths: 0,
    todayCases: 0,
    critical: 0,
    tests: 0
    // date: ''
}

const infectedReducer = (state =initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state,
                confirmed: action.data.cases,
                deaths: action.data.deaths,
                recovered: action.data.recovered,
                todayCases: action.data.todayCases,
                todayDeaths: action.data.todayDeaths,
                critical: action.data.critical,
                tests: action.data.tests
            }
        case PREVIOUSLY_INIT:
            return { ...state,
                previouslyConfirmed: {...action.data.timeline.cases},
                previouslyDeaths: {...action.data.timeline.deaths},
                previouslyRecovered: {...action.data.timeline.recovered}
            }
        default:
            return state
    }
}

export const initAC = (data) =>{
    return{
        type: INIT,
        data: data
    }
}

export const previouslyInitAC = (data) =>{
    return{
        type: PREVIOUSLY_INIT,
        data: data
    }
}


export default infectedReducer;