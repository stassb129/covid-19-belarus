export const INIT = 'INIT';


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
                date: action.data.Date
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