import axios from 'axios';

export const FETCH_API_REQUEST = 'FETCH_API_REQUEST';
export const FETCH_API_SUCCESS = 'FETCH_API_SUCCESS';
export const FETCH_API_FAILURE = 'FETCH_API_FAILURE';
export const LOAD_FROM_STORAGE = 'LOAD_FROM_STORAGE';
export const LOAD_FROM_STORAGE_FALIURE = 'LOAD_FROM_STORAGE_FAILURE';
export const UPDATE_ONLINE_STATUS = 'UPDATE_ONLINE_STATUS'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchAPIRequest = () => ({
  type: FETCH_API_REQUEST,
});

export const fetchAPISuccess = (data) => ({
  type: FETCH_API_SUCCESS,
  payload: data,
});

export const fetchAPIFailure = (error) => ({
  type: FETCH_API_FAILURE,
  payload: error,
});

export const fetchStorage = (data) => ({
  type: LOAD_FROM_STORAGE,
  payload:data
})
export const fetchStorageFailure = (error) => ({
  type: LOAD_FROM_STORAGE_FALIURE,
  payload: error
})
export const updateOnlineStatus = (isOnline) => ({
  type: UPDATE_ONLINE_STATUS,
  payload :isOnline
})


export const fetchAPI = () => {
  return (dispatch) => {
    dispatch(fetchAPIRequest());

 
    axios
      .get('https://mocki.io/v1/d5283307-280c-4e04-b0e7-a017af6d3dec')
      .then((response) => {
       
        dispatch(fetchAPISuccess(response.data));

        AsyncStorage.setItem('videos', JSON.stringify(response.data));
        
      })
      .catch((error) => {
        dispatch(fetchAPIFailure(error.message));
      });
  };
};

export const loadFromAsyncStorage = () => {
  return async (dispatch) => {
    try{
      const videos = await AsyncStorage.getItem('videos')
      dispatch(fetchStorage(JSON.parse(videos)));
    }catch(error){
      dispatch(fetchStorageFailure(error.message))
    }
  }
}