import React from "react";
import Layout from "../../components/account/AccountLayout";
import RegistrationInput from "../../components/account/RegistrationInput";
import { registrationMapper } from "../../services/accountMapper";

type Props = {};

const Register = (props: Props) => {
  return (
    <Layout title="Register Here">
      <div className="register-container">
        <h4 className="register-header">Register</h4>
        <div className="register-body">
          <form className="register-form" action="submit">
            {/* make an input type for this */}
            {registrationMapper.map((input, index) => (
              <RegistrationInput
                key={index}
                labelText={input.label}
                inputName={input.input}
              />
            ))}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
