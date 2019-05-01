import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../Redux/store'
import Home from '../Home/Home';
import Header from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
