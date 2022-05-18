type Props = {
  labelText: string;
  inputName: string;
};

const RegistrationInput = ({ labelText, inputName }: Props) => {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input name={inputName} type="text" className={`form-control`} />
      {/* if error message than we display one */}
      {/* <div className="invalid-feedback">error Message</div> */}
    </div>
  );
};

export default RegistrationInput;
