import { useForm } from "react-hook-form";
import "./LoginPage.css";
const LoginPage = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitLoginForm = ({ userName, password }) => {
    const loginFormInput = {
      userName,
      password,
    };
    props.history.push("/dashboard", loginFormInput);
    reset();
  };

  return (
    <div>
      <div className="wrapper">
        <form
          className="form-signin"
          onSubmit={handleSubmit(onSubmitLoginForm)}
        >
          <h2 className="text-center">Login Form</h2>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${errors.userName && "invalid"}`}
              name="userName"
              placeholder="User Name"
              {...register("userName", { required: "Username is  Required" })}
            />
            {errors && errors.userName && (
              <small className="text-danger">{errors.userName.message}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className={`form-control ${errors.password && "invalid"}`}
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Minimum Required length is 6",
                },
              })}
            />
            {errors && errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <button className="btn btn-lg btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
