import "./ExpenseForm.css";

function ShowHideForm(props) {
  const showform = () => {
    props.visability(true);
  };

  return (
    <div className="new-expense__actions showhide">
      <button onClick={showform}>Add Expense</button>
    </div>
  );
}
export default ShowHideForm;
