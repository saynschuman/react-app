import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducer'
// import logger from 'redux-logger'
import commentIdGenerator from '../middlewares/commentIdGenerator'
import server from '../middlewares/request'


const configureStore = initialState => {
  const enhancer = composeWithDevTools(applyMiddleware(commentIdGenerator, server))
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
