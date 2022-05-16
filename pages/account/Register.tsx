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
          <form action="submit">
            {/* make an item type for this */}
            {registrationMapper.map((item, index) => (
              <div key={index}>
                <RegistrationInput
                  labelText={item.label}
                  inputName={item.input}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
