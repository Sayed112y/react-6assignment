const URL = "http://localhost:4000/models";

let initialState = {
  number: 1,
  model: []
}

function fetchData() {
  return fetch(URL)
  .then(res => res.json())
  .then(res => {return res;})
  .catch(err => console.log(err));
}
let data = fetchData();
data.then(Response => {
    initialState.model = Response;
})

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD":
        state = {
            ...state,
            number: state.number + action.payload
        }

      break;
      case "Substract":
        state = {
            ...state,
            number: state.number - action.payload
        }
      break;
      case 'GET_MODEL':
      break;
      case 'INSERT_MODEL':
        const id = new Date().getTime();
        let product = action.payload;
        product.id = id;
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: id, productname: product.productname,
              quantity: product.quantity, price: 'Rs. '+ product.price})
          };
          fetch(URL, requestOptions)
          .then(response => {response.json();
              if( response.status === 201) {              
              state = {
                  ...state,
                  model : state.model.push(action.payload)
              }
          }});
      break;
      default:
        break;
    }
    return state;
}