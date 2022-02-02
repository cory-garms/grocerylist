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
            <ItemModal animation={true}></ItemModal>
            <ShoppingList />
          </Container>
          <h1> {store.getState().auth.token !== null ? 1 : 2 }</h1>
        </div>
    )
 
    const gueststyle = (
      <div className="App" >
          <AppNavBar />
          <Container>
            <ItemModal animation={false}></ItemModal>
            <ShoppingList />
          </Container>
          <h1> {store.getState().auth.token !== null ? 1 : 2 }</h1>
        </div>
    )

    return (
      <Provider store={store}>
        { 1 > 0 ? authstyle : gueststyle }
      </Provider>
    );
  }
}

export default App;
