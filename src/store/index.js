import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducer'
import logger from 'redux-logger'
import commentIdGenerator from '../middlewares/commentIdGenerator'
import server from '../middlewares/request'
import thunk from 'redux-thunk'
import loadComments from '../middlewares/loadComments'
import axios from 'axios'

window.axios = axios

//
// const configureStore = initialState => {
//   const enhancer = composeWithDevTools(applyMiddleware(commentIdGenerator, server))
//   const store = createStore(rootReducer, initialState, enhancer)
//
//   if (module.hot) {
//     module.hot.accept('../reducer', () => {
//       const nextRootReducer = require('../reducer').defau lt
//       store.replaceReducer(nextRootReducer)
//     })
//   }
//
//   return store
// }

// export default configureStore

const enhancer = composeWithDevTools(applyMiddleware(thunk, commentIdGenerator, server, loadComments, logger))

const store = createStore(rootReducer, {}, enhancer)

//dev only
window.store = store

export default store