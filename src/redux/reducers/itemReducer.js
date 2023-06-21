import { FETCH_API_REQUEST, FETCH_API_SUCCESS, FETCH_API_FAILURE, LOAD_FROM_STORAGE, LOAD_FROM_STORAGE_FALIURE,UPDATE_ONLINE_STATUS } from '../actions/itemAction';

const initialState = {
  data: {},
  loading: false,
  error: null,
  isOnline: true,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_API_SUCCESS:
    
      return {
        ...state,
        loading: false,
        data: action.payload,
        page: state.page + 1
      };
    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_FROM_STORAGE:
      return{
        ...state,
        data: action.payload,
        loading: false, 
        error:null
      };
    case LOAD_FROM_STORAGE_FALIURE:
      return{
        ...state, data: {}, loading:false,error:action.payload 
      };
    case UPDATE_ONLINE_STATUS:
      return{
      ...state,
      isOnline: action.payload
    }
    default:
      return state;
  }
};

export default apiReducer;