// store/configureStore.js

import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'; // 新增 route 中间件
// 引入thunk 中间件，处理异步操作
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'; // 引入 history
import rootReducer from "./reducers"
export const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const middleware = [routeMiddleware, thunk];
/*
    辅助使用chrome浏览器进行redux调试
*/
// const composeEnhancers =
//   process.env.NODE_ENV !== 'production' &&
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify here name, actionsBlacklist, actionsCreators and other options
//     }) : compose;

/*
   调用 applyMiddleware ，使用 middleware 来增强 createStore
*/
// const store = composes(
//    applyMiddleware(...middleware)
// )(createStore);
const initialState={};
const store = createStore(
    rootReducer,
    initialState,
      applyMiddleware(... middleware)
  );

// export default configureStore; 

export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;



