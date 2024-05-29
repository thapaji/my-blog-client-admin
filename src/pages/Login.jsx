import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      localStorage.setItem("token", response.data.token);
      history.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Fieldset legend="Login" className="p-d-flex p-p-4 p-shadow-2 p-border p-border-white">
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
          <div className="p-field">
            <label htmlFor="username">Username</label>
            <InputText id="username" name="username" placeholder="Example:mail.mail.com" />
          </div>
          <div className="p-field">
            <label htmlFor="password">Password</label>
            <Password name="password" placeholder="Password" feedback={false} toggleMask/>
          </div>
          <Button label="Login" icon="pi pi-sign-in" />
        </form>
      </Fieldset>
    </div>
  );
};

export default Login;
