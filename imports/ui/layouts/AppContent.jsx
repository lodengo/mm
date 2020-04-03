import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DesktopPage from '../pages/DesktopPage';

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          Meteor.userId() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

const AppContent = ({
    user,
}) => {
    return (
      <TransitionGroup>
          <CSSTransition 
              classNames="fade"
              timeout={200}
          >
              <Switch>
                  <Route 
                      path="/login"
                      component={LoginPage}
                  />
                  <Route 
                      path="/register"
                      component={RegisterPage}
                  />
                  <PrivateRoute
                      path="/desktop"
                      component={DesktopPage}
                  />                    
                  <Route path="/">
                      <Redirect to="/desktop" />
                  </Route>                     
                  
                  
                
              </Switch>

          </CSSTransition>
      </TransitionGroup>
    );
};

export default AppContent;