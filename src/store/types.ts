export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  name: string;
  id: number;
  cod: number;
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface SetErrorAction {
  error: WeatherError;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: WeatherError;
}

export interface setAlertAction {
  message: string;
}
