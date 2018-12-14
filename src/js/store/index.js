/*
REDUX RECAP

https://www.valentinog.com/blog/react-redux-tutorial-beginners/

- the Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
- the state of the application lives as a single, immutable object within the store
- as soon as the store receives an action it triggers a reducer
- the reducer returns the next state

What’s a Redux reducer made of?

A reducer is a Javascript function taking two parameters: the state and the action.



Play with these in browser console to play with redux!!

getState - for accessing the current state of the application
  ex: store.getState()

dispatch - for dispatching an action
  ex: store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id:1 }) )

subscribe - for listening on state changes
  ex: store.subscribe(() => console.log('Look ma, Redux!!')

*/

// 1
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
