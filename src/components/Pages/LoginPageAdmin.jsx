import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authslice";
import { buttonMain } from "../Styles/Styles";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const hardcodedUser = {
      username: "admin",
      password: "123",
    };
    //Include DB to store username and password
    if (
      data.username === hardcodedUser.username &&
      data.password === hardcodedUser.password
    ) {
      dispatch(login({ username: data.username }));
      navigate("/examiner");
    } else {
      alert("Wrong username or password, please try again");
    }
  };

  return (
    <main>
    <div className="flex flex justify-center items-center min-h-screen bg-theme-purple">
      <header>
      <div className="text-5xl font-bold text-white m-5">
        <h1>User Login </h1>
      </div>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-5 rounded-md shadow-lg"
      >
        <div className="mb-4">
          <label className=" text-theme-dark font-bold mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter username here"
            {...register("username", { required: "Username is required" })}
            className="border p-2 w-full"
          />
          {errors.username && (
            <span className="text-red-500">{errors.username.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block text-theme-dark font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 w-full s"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button type="submit" className={buttonMain}>
          Login
        </button>
        <a onClick={() => navigate("/registeradmin")} className="cursor-pointer"><u>Dont't have an account? Register Here</u></a>
      </form>
    </div>
    </main>
  );
};

export default LoginPage;
