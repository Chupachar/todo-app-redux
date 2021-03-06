import { createStore } from 'redux';
import rootReducer from './reducers/todos'

export const store = createStore(rootReducer);

export default store;