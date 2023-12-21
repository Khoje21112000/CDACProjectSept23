import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  Handler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    // custom API
    axios.post("http://localhost:5293/api/user", this.state)
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <div className="RegisterForm">
          <br /><br />
          <form onSubmit={this.SubmitHandler}>
            <input onChange={this.Handler} value={email} placeholder="Email" name="email" type="text"></input>
            <input onChange={this.Handler} value={password} placeholder="Password" name="password" type="text"></input>
            <button>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
