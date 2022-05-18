import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { formResolve, User } from "../../helpers/formValidation";
import { registrationMapper } from "../../mappers/accountMapper";
import RegistrationInput from "../account/RegistrationInput";

type Props = {
  user: User;
};

const AddEdit = ({ user }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm(formResolve);

  const onSubmit = () => {
    console.log("ADD EDIT SUBMITTED");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="register-form"
      action="submit"
    >
      {/* make an input type for this */}
      {registrationMapper.inputs.map((input, index) => (
        <RegistrationInput
          key={index}
          labelText={input.label}
          inputName={input.input}
          {...register(input.input)}
        />
      ))}
      <button className="register-form_submit">
        {formState.isSubmitting && (
          <span className="register-form_spinner"></span>
        )}
        Register
      </button>
      {/* Make this close a modal if I change this into one */}
      <Link href="/account/Login">Cancel</Link>
    </form>
  );
};

export default AddEdit;
