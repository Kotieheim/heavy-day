import React, { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

const AccountLayout = ({ title, children }: Props) => {
  const routeHandler = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    // get property from service data
    const isLoggedIn = false;
    if (isLoggedIn) {
      routeHandler.push("/");
    }
  });
  return (
    <div>
      <h1>{title ? title : "Placeholder Title"}</h1>
      <div>{children}</div>
    </div>
  );
};

export default AccountLayout;
