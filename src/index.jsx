import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './redux/store';
import {FirebaseContext} from './store/context'
import Context from './store/context'
import {Fire} from './firebase/config'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FirebaseContext.Provider value={{Fire}}>
    <Context>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    </Context>
      </FirebaseContext.Provider>
  </React.StrictMode>,
);
