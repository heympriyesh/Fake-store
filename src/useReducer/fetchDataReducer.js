const initaildata = {
    data: []

}

const fetchDataReducer = (state = initaildata, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                data: [...state.data, ...action.payload]
            }
        case 'SAVE_PRODUCT':
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }

}

export default fetchDataReducer;