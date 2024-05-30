import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { RiLoginBoxLine } from "react-icons/ri"; // Import login icon from React Icons library
import axios from "axios"; // Don't forget to import axios

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
    <div className="flex justify-content-center align-items-center h-screen">
      <Fieldset legend="Login" className="shadow-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
          <div className="p-field">
            <label htmlFor="username">Username</label>
            <InputText id="username" name="username" placeholder="mail@mail.com" />
          </div>
          <div className="p-field">
            <label htmlFor="password">Password</label>
            <Password name="password" placeholder="Password" feedback={false} toggleMask />
          </div>
          <Button label="Login" icon={<RiLoginBoxLine />} />{" "}
        </form>
      </Fieldset>
    </div>
  );
};

export default Login;
