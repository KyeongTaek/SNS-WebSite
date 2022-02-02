import { combineReducers } from "redux";

import resizeReducer from './resize'

const rootReducer = combineReducers({
    isDesktop : resizeReducer
})

export default rootReducer