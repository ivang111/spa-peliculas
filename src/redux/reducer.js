import { GET_ALL_POPULARUTY, GET_DETAIL_MOVIE } from "../ActionTypes"


const initialState = {
  allPopularuty: [],
  detail: []
  
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    
    case GET_ALL_POPULARUTY:
        return {
        ...state,
        allPopularuty: action.payload
      };
      case GET_DETAIL_MOVIE:
      console.log("reducer", action.payload)
      return {
        ...state,
        detail: action.payload
      };
    default: 
      return {
        ...state
    }
  }
};

export default rootReducer;
