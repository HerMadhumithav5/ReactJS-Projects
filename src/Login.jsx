import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState();

  function validate() {
    let username_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let password_regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (username_regex.test(username) && password_regex.test(password)) {
      setLogin("Login Success");
    } else {
      setLogin("Login Failed");
    }
  }

  return (
    <>
      <div className="main">
        <div className="form">
          <h2>Login</h2>
          <form className="login">
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="username"
                id="user"
                placeholder="Enter Username or Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-box">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="remember">
              <div className="check">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>
              <div className="forget">
                <a href="../HTML/">Forget Password?</a>
              </div>
            </div>
            <button type="button" onClick={validate}>Login</button>
            <p>
              Don't have an account?
              <a href="../HTML/register.html">Register</a>
            </p>
            {login && <div className="result">{login}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
