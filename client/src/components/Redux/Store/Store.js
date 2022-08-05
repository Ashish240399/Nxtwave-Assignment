import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { resourceReducer } from "../Reducers/AllResourceReducer";
import thunk from "redux-thunk";
import { resourceDetailsReducer } from "../Reducers/ResourcePageReducer";
const rootReducer = combineReducers({
  allResources: resourceReducer,
  details: resourceDetailsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
