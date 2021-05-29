const initaildata = {
    value: []
}

const addDataReducer = (state = initaildata, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            return {
                ...state,
                value: [...state.value, action.payload]
            }
        default:
            return state
    }

}

export default addDataReducer;