import { createStore } from "redux";
import { Count } from "../Reducer/Count";

const store = createStore(
  Count,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
