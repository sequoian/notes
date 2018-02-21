import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers)

// for testing
store.subscribe(() => {
  console.log(store.getState())
}) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()