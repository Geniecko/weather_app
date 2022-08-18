import { GET_WEATHER, SET_LOADING, WeatherAction, WeatherState, SET_ERROR } from '../types';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  console.log(action.type);

  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
