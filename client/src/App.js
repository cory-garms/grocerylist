import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import background from './img/image.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { loadUser } from './actions/authActions';
import authReducer from './reducers/authReducer';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const authstyle = (
      <div className="App" style={{backgroundImage:`url(${background})`} } >
          <AppNavBar />
          <Container>
            <ItemModal animation={false}></ItemModal>
            <ShoppingList />
          </Container>
        </div>
    )

    const gueststyle = (
      <div className="App" style={{backgroundImage:`url(${background})`} } >
          <AppNavBar />
          <Container>
            <ItemModal animation={false}></ItemModal>
            <ShoppingList />
          </Container>
        </div>
    )

    return (
      <Provider store={store}>
        { store.getState().auth.isAuthenticated ? authstyle : gueststyle }
        <div className="App" style={{backgroundImage:`url(${background})`} } >
          <AppNavBar />
          <Container>
            <ItemModal animation={false}></ItemModal>
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
