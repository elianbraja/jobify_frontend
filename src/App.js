import React from "react";
import "./App.css";
import Header from './components/header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute'
import Login from './containers/authentication/Login';
import Signup from './containers/authentication/Signup';
import Confirmation from './containers/authentication/Confirmation';
import CURRENT_USER from './queries/user/CurrentUser'
import { useQuery } from '@apollo/react-hooks';

import Homepage from "./components/homepage/homepage"
import JobsComponent from "./components/mutation/jobs/JobsComponent"
import JobDetails from "./components/mutation/jobs/JobDetails";
import CreateJob from "./components/mutation/jobs/CreateJob";
import UpdateJob from "./components/mutation/jobs/UpdateJob";
import PageNotFound from "./components/pageNotFound/PageNotFound"


function App(){
  const {data:current_user, loading: loading} = useQuery(CURRENT_USER)
  return (
    <BrowserRouter>
      <Header user={current_user}/>
      {!loading ?
        
        <Switch>
          <Route exact path="/" component={Homepage}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/confirmation" component={Confirmation}/>
          
          <Route exact path="/jobs" component={JobsComponent} />
          <Route exact path="/jobs/new" component={CreateJob} />
          <Route exact path="/jobs/:id" component={JobDetails} />
          <Route exact path="/jobs/:id/edit" component={UpdateJob} />

          
          {/* <PrivateRoute path="/" exact component={Homepage} user={current_user} /> */}
        </Switch>
        :
        null}
    </BrowserRouter>
  );
}

export default App;
