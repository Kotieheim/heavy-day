export const registrationMapper = {
  inputs: [
    {
      label: "First Name",
      input: "firstName",
      type: "text",
    },
    {
      label: "Last Name",
      input: "lastName",
      type: "text",
    },
    {
      label: "Username",
      input: "username",
      type: "text",
    },
    {
      label: "Password",
      input: "password",
      type: "password",
    },
  ],
  route: "/account/Login",
};

export const loginMapper = {
  inputs: [
    {
      label: "Username",
      input: "username",
      type: "text",
    },
    {
      label: "Password",
      input: "password",
      type: "password",
    },
  ],
  route: "/",
};
