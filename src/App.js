import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from "./styles/global";
import Header from './components/Header';
import Routes from './routes';

import history from './services/history'
import store from './store';

function App() {
  return (
      <Router history={history}>
    <Provider store={store}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000}/>
    </Provider>
      </Router>
  )
}

export default App;
