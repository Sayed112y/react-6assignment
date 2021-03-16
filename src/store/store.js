import { createStore } from 'redux';
import {reducer} from '../reducer/reducer';
const store = createStore(reducer);

store.subscribe( () => {
  console.log('store is now,', store.getState());
});

export default store;
// store.dispatch(sum(1));

// store.dispatch(Substract());

// store.dispatch(addProduct({productname:"Redmi 7s Note",quantity:1,price:10991}));

window.store =store;