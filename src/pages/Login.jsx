import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { RiLoginBoxLine } from "react-icons/ri";
import { loginUser } from "../features/users/userAxios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserObj } from "../features/users/userAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const onSubmit = async (data) => {
    const { status, message, tokens } = await loginUser(data);
    sessionStorage.setItem("accessJWT", tokens.accessJWT);
    localStorage.setItem("refreshJWT", tokens.refreshJWT);
    dispatch(getUserObj());
  };

  return (
    <div className="flex justify-content-center align-items-center h-screen">
      <Fieldset legend="Login" className="shadow-8">
        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
          <div className="p-field">
            <label htmlFor="email">Username</label>
            <InputText
              id="email"
              placeholder="mail@mail.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="p-field">
            <label htmlFor="password">Password</label>
            <InputText
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <Button label="Login" icon={<RiLoginBoxLine />} type="submit" />
        </form>
      </Fieldset>
    </div>
  );
};

export default Login;
