export const INIT = 'INIT';
export const PREVIOUSLY_INIT = 'PREVIOUSLY_INIT'

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