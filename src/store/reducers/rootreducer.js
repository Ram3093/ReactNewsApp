import healthReducer from './healthReducer'
import politicsReducer from "./politicsReducer"
import techReducer from './techReducer'
import scienceReducer from './scienceReducer'
import sportsReducer from './sportsReducer'
import travelReducer from './travelReducer'
import businessReducer from './businessreducer'
import homeReducer from './homeReducer'
import worldReducer from './worldReducer'
import topReducer from './topReducer'
import featureReducer from './featureReducer'
import latestReducer from './latestReducer'
import { combineReducers } from 'redux'




const rootReducer=combineReducers({
    health:healthReducer,
    politics:politicsReducer,
    tech:techReducer,
    science:scienceReducer,
    sport:sportsReducer,
    travel:travelReducer,
    business:businessReducer,
    home:homeReducer,
    world:worldReducer,
    top:topReducer,
    feature:featureReducer,
    latest:latestReducer
});

export default rootReducer