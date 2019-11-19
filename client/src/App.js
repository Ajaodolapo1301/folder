import React, {useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Landing from "./component/layout/Landing"
import Header from "./component/layout/Header"
import Signup from "./component/auth/Signup"
import Login from "./component/auth/Login"
import store from "./store"
import { Provider} from "react-redux"
import Alert from './component/layout/Alert';
import {loadUser} from "./actions/authAction"
import setAuthToken from "./utils/setAuthToken"
import Dashboard from './component/Dashboard/Dashboard';
import PrivateRoute from "./component/layout/PrivateRoute"
import AddStaffs from './component/Staff/AddStaffs';
import StaffDetail from './component/Staff/StaffDetail';
import EditStaff from './component/Staff/EditStaff';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}



function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <div>
      <Provider store={store} >
      <Router>
        <Header/>
      <Route exact path="/" component={Landing}/>
        <section className="container">
            <Alert/>
              <Switch>

                <Route exact path="/register" component={Signup}/>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/staff/add" component={AddStaffs}/>
                <PrivateRoute exact path="/staff/:id" component={StaffDetail}/>
                <PrivateRoute exact path="/edit/:id" component={EditStaff}/>
                <Route exact path="/login" component={Login}/>
              </Switch>
              </section>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
