import { useState } from "react";
import { RegisterForm } from "../components/RegisterForm";
import { authService } from "../services/AuthService";

export const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.password ||
      !data.password_confirmation ||
      !data.terms
    ) {
      alert("Bad credentialas!!!!!");
      return;
    }
    await authService.register(data);
  };

  const onChangeHandler = (e) => {
    if (e.target.name == "terms") {
      setData({ ...data, [e.target.name]: e.target.checked });
      console.log(data);
      return;
    }
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <RegisterForm
      data={data}
      handleOnChange={onChangeHandler}
      handleOnSubmit={onSubmitHandler}
    />
  );
};
