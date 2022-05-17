import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Layout from "../../components/account/AccountLayout";
import RegistrationInput from "../../components/account/RegistrationInput";
import { registrationMapper } from "../../services/accountMapper";
import Link from 'next/link';

type Props = {};

const Register = (props: Props) => {
  const { register, handleSubmit, formState }  = useForm()
  const { errors } = formState;

  const onSubmit = (user: any) => console.log(`${user} submitted`)
  return (
    <Layout title="Register Here">
      <div className="register-container">
        <h4 className="register-header">Register</h4>
        <div className="register-body">
          <form onSubmit={handleSubmit(onSubmit)} className="register-form" action="submit">
            {/* make an input type for this */}
            {registrationMapper.map((input, index) => (
              <RegistrationInput
                key={index}
                labelText={input.label}
                inputName={input.input}
              />
            ))}
            <button className="register-form_submit">
              {formState.isSubmitting && <span className='register-form_spinner'></span>}
              Register
            </button>
            {/* Make this close a modal if I change this into one */}
            <Link href="/account/Login">Cancel</Link>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
