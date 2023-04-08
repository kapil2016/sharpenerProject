import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSlice from '../store/AuthSlice';

const Header = () => {

  const isAuthanticated = useSelector(state=>state.auth.isAuthanticated);
  const dispatch = useDispatch();

  const logoutHandler = ()=>{
    dispatch(authSlice.actions.isAuthanticated(false))
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthanticated &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
