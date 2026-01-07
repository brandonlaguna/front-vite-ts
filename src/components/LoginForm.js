import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setUser } from "../../store/authSlice";
import { addNotification } from "../../store/uiSlice";
import AuthService from "../services/authService";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const { notifications } = useAppSelector((state) => state.ui);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    AuthService.login({
      username: e.target.username.value,
      password: e.target.password.value,
    })
      .then((response) => {
        // Suponiendo que la respuesta contiene el usuario y el token
        dispatch(setUser(response.response));
        sessionStorage.setItem("token", response.response.token);
        sessionStorage.setItem("refreshToken", response.response.refreshToken);
        dispatch(
          addNotification({
            type: "success",
            message: "Login successful!",
          })
        );
      })
      .catch((error) => {
        dispatch(
          addNotification({
            type: "error",
            message: "Login failed. Please check your credentials.",
          })
        );
      });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <input
            type="text"
            className="form_control"
            placeholder="Usuario"
            name="username"
            required="required"
          />
        </div>
        <div className="form_group">
          <input
            type="password"
            className="form_control"
            placeholder="Password"
            name="password"
            required="required"
            autoComplete="false"
          />
        </div>
        <div className="form_group">
          <button className="main-btn btn-yellow">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
