import classes from '../Login/Login.module.css';

const Input = (props)=>{
    return (
        <div
        className={`${classes.control} ${
          props.state.isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.id}>{props.title}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.state.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    );
}

export default Input ;