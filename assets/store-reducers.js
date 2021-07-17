  
import { combineReducers } from 'redux';
import articles from './store-reducers-artical'

const rootReducer = combineReducers({
    articles
});

export default rootReducer;