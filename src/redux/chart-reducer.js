export const CHECK = 'CHECK';


const initialState = {
    isCheckChart: false
}

const chartReducer = (state =initialState, action) => {
    switch (action.type) {
        case CHECK:
            return {...state,
                isCheckChart: !state.isCheckChart
            }
        default:
            return state
    }
}



export const setChart = () =>{
    return{
        type: CHECK,
    }
}


export default chartReducer;