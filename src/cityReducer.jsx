const initialState = {
    cities: [],
    city: '',
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return {
                ...state,
                cities: [...state.cities, action.payload],
            };
        case 'REMOVE_CITY':
            return {
                ...state,
                cities: state.cities.filter(city => city !== action.payload),
            };
        case 'CURRENT_CITY':
            console.log("action payload recieved is, ",action.payload)
            return {
                ...state,
                city: action.payload,
            };
        default:
            return state;
    }
};

export default cityReducer;