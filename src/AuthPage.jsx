import axios from "axios";
import "./App.css";
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post("http://localhost:3001/authenticate", { username: value });
    props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Hello 👋</div>

        <div className="form-subtitle">Enter Your Email adress </div>

        <div className="auth">
          <div className="auth-label"></div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
