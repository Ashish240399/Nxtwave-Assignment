import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { resourceReducer } from "../Reducers/AllResourceReducer";
import thunk from "redux-thunk";
import { resourceDetailsReducer } from "../Reducers/ResourcePageReducer";
import { userReducer } from "../Reducers/UserReducer";
const rootReducer = combineReducers({
  allResources: resourceReducer,
  details: resourceDetailsReducer,
  userName: userReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
