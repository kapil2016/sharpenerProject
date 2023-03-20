import React, { useState , useEffect , useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state , action)=>{
  if (action.type ==='Email'){
    return  {value: action.val , isValid : action.val.includes('@')}
  }
  if (action.type ==='Validation'){
    return  {value: state.value , isValid : state.value.includes('@')}
  }
   
}
const passwordReducer = (state , action)=>{
  if (action.type ==='Password'){
    return  {value: action.val , isValid : action.val.trim().length>6}
  }
  if (action.type ==='Validation'){
    return  {value: state.value , isValid : state.value.trim().length>6}
  }
   
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const[emailState , dispatchEmailState] = useReducer(emailReducer , {value: '' , isValid : null})
  const[passwordState , dispatchPasswordState] = useReducer(passwordReducer , {value: '' , isValid : null})
  useEffect(()=>{
    setFormIsValid(emailState.isValid && passwordState.isValid);
    console.log('chaking validation')
  },[emailState.isValid , passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmailState({type : 'Email' , val : event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type : 'Password' , val : event.target.value})

    // setFormIsValid(
    //     emailState.isValid && event.target.value.trim().length > 6 
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmailState({type : 'Validation'})
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({type : 'Validation'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
