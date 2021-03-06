import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers'
import './reset.css'
import App from './components/App'
import storage from './storage'
import registerServiceWorker from './registerServiceWorker'


const persistedState = storage.loadState('noteState')
const store = createStore(reducers, persistedState)

store.subscribe(() => {
  storage.saveState('noteState', {
    notes: store.getState().notes
  })
}) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

registerServiceWorker()