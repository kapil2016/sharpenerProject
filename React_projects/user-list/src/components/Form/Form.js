import Input from "../Input/Input";
import Button from "../Button/Button";
import Card from "../UI/Card/Card";
import "../UI/Card/CenterItem.css";
import { useState } from "react";
import InvalidInputModal from "../Modal/InvalidInputModal";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inevalidMessage, setInvalidMessage] = useState('');
  const userNameInputChange = (input) => {
    setUserName(input);
  };
  const userAgeInputChange = (input) => {
    setUserAge(input);
  };
  const collegeNameInputChange = (input) => {
    setCollegeName(input);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (userName.trim().length > 0 && collegeName.trim().length > 0 && userAge.trim().length > 0 && parseInt(userAge) > 0){
      props.onAddUser({ Name: userName, Age: userAge, College: collegeName, id: Date.now() });
      setUserName("");
      setUserAge("");
      setCollegeName("")
    }else if (parseInt(userAge) <= 0) {
      setInvalidMessage(" User Age Can't be less then one ") 
      setIsOpen(true);
    }else if (userName.trim().length <= 0){
      setInvalidMessage(" User Name Can't be Empty ")
      setIsOpen(true);
    }else{
      setInvalidMessage("Form is not valid. Please fill All The Fields")
      setIsOpen(true);
    }
    
    
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Card>
      <form onSubmit={onFormSubmit}>
        <Input
          Id="UserName"
          inputName="User Name"
          inputType="text"
          onChange={userNameInputChange}
          value={userName}
        ></Input>
        <Input
          Id="Age"
          inputName="User Age"
          inputType="number"
          onChange={userAgeInputChange}
          value={userAge}
        ></Input>
        <Input
          Id="collegeName"
          inputName="College Name"
          inputType="text"
          onChange={collegeNameInputChange}
          value={collegeName}
        ></Input>
        <div className="centerAlign">
          <Button>Submit</Button>
        </div>
        <InvalidInputModal isOpen={isOpen} onRequestClose={handleCloseModal} message ={inevalidMessage} />
      </form>
    </Card>
  );
};

export default Form;
