export const FETCH_SOMETHING= 'FETCH_SOMETHING';

const URL = "https://jsonplaceholder.typicode.com/todos";

export function fetchWeather(city) {

    const request = fetch.get(URL);

    return {
        type: FETCH_SOMETHING,
        payload: request
    };
}