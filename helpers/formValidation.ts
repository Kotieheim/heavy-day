import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const formSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .transform((x) => (x === "" ? undefined : x))
    .concat(yup.string().required("Password is required"))
    .min(6, "Password must be at least 6 characters"),
});

export interface User extends yup.InferType<typeof formSchema> {}

export const formResolve = { resolver: yupResolver(formSchema) };
