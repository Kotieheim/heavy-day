import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Layout from "../../components/account/AccountLayout";
import RegistrationInput from "../../components/account/RegistrationInput";
import { registrationMapper } from "../../mappers/accountMapper";
import Link from "next/link";
import { formResolve } from "../../helpers/formValidation";

type Props = {
  user: any;
};

const Register = ({ user }: Props) => {
  const { register, handleSubmit, reset, formState } = useForm(formResolve);
  const { errors } = formState;
  const onSubmit = (user: any) => console.log(`${user} submitted`);

  const router = useRouter();

  return (
    <Layout title="Register Here">
      <div className="register-container">
        <h4 className="register-header">Register</h4>
        <div className="register-body">
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
              />
            ))}
            <button className="register-form_submit">
              {formState.isSubmitting && (
                <span className="register-form_spinner"></span>
              )}
              Register
            </button>
            {/* Make this close a modal if I change this into one */}
            <Link href={registrationMapper.route}>Cancel</Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
