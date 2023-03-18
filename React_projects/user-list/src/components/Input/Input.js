import "./Input.css";

const Input = (props) => {
  const inputChangeHandler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div>
      <label htmlFor={props.inputName}>{props.inputName}</label>
      <input
        type={props.inputType}
        id={props.Id}
        name={props.inputName}
        className="dynamic-input"
        onChange={inputChangeHandler}
        value={props.value}
      />
    </div>
  );
};

export default Input;
