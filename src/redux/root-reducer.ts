import { combineReducers } from 'redux';

import uploadState from './upload/reducer';

const rootReducer = combineReducers({uploadState});

export default rootReducer;