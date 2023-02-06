import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { authService } from "../services/AuthService";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("Bad credentialas!!!!!");
      return;
    }
    await authService.login(user);
  };

  return (
    <LoginForm user={user} setUser={setUser} handleSubmit={submitHandler} />
  );
};
