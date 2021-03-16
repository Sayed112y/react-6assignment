export const FETCH_SOMETHING= 'FETCH_SOMETHING';

const URL = "http://localhost:4000/models";

export function fetchWeather(city) {

    const request = fetch.get(URL);

    return {
        type: FETCH_SOMETHING,
        payload: request
    };
}