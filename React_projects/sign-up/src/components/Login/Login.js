import React, { useState , useEffect , useReducer } from 'react';
import Input from '../Input/Input';
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
  const [formIsValid, setFormIsValid] = useState(false);
  const[emailState , dispatchEmailState] = useReducer(emailReducer , {value: '' , isValid : null})
  const[passwordState , dispatchPasswordState] = useReducer(passwordReducer , {value: '' , isValid : null})
  useEffect(()=>{
    setFormIsValid(emailState.isValid && passwordState.isValid);
    console.log('chaking validation')
  },[emailState.isValid , passwordState.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmailState({type : 'Email' , val : event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({type : 'Password' , val : event.target.value})
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
        <Input state = {emailState} title ='E-Mail' type ='email' id ='email' onChange={emailChangeHandler} onBlur={validateEmailHandler} ></Input>
        <Input state = {passwordState} title ='Password' type ='password' id ='password' onChange={passwordChangeHandler} onBlur={validatePasswordHandler} ></Input>
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
