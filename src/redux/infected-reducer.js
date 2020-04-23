export const INIT = 'INIT';

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
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    date: ''
}

const infectedReducer = (state =initialState, action) => {
    switch (action.type) {
        case INIT:
            return {...state,
                confirmed: action.data.Confirmed,
                deaths: action.data.Deaths,
                recovered: action.data.Recovered,
                date: dateTranslate(action.data.Date)
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


export default infectedReducer;