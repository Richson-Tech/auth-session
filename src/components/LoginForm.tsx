import { login } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const [state, formAction] = useFormState(login, undefined)

const LoginForm = () => {
  return (
    <form action={login}>
      <input type="text" name="username" required placeholder="username" />
      <input type="password" name="password" required placeholder="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
