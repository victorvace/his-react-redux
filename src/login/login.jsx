import React from "react";
import api from "../services/api";
import "./login.css";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null
    };
  }
  login(ev) {
    ev.preventDefault();
    const { email, password } = this.state;
    let user = api.login(email, password);
    if (user) {
      this.props.loginStore(user);
    } else {
      // no valid user
      this.setState({ error: "invalid username or password" });
    }
  }
  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
      error: null
    });
  }
  render() {
    if (this.props.auth) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <section className="login">
        {this.state.error ? (
          <div className="error"> {this.state.error}</div>
        ) : null}
        <form onSubmit={this.login.bind(this)}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this)}
          />
          <button type="submit">Entrar</button>
        </form>
      </section>
    );
  }
}

const Login = connect(
  state => ({
      auth: state.auth
  }),
  dispatch => ({
    loginStore: user =>
      dispatch({
        type: "USER_LOGGED_IN",
        payload: user
      })
  })
)(login);
export default Login;
