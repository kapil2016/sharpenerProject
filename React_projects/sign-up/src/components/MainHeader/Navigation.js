import React from 'react';
import AuthContext from '../StoreContext/auth-context';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
  <AuthContext.Consumer>
  {(ctx)=>{
      return (
        <nav className={classes.nav}>
          <ul>
            {ctx.isLogedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {ctx.isLogedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {ctx.isLogedIn && (
              <li>
                <button onClick={ctx.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      );
  }}
  </AuthContext.Consumer>
  );
};

export default Navigation;
