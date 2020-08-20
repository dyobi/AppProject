import { combineReducers } from 'redux';

import landingNav from './landingNav';

const RootReducer = combineReducers({
    landing: landingNav
});

export default RootReducer;