import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class dashboard extends React.Component {
  logout = () => {
    this.props.logoutStore();
  };
  render() {
    if (!this.props.auth) {
      return <Redirect to="/login" />;
    } else {
      return (
        <section className="dashboard">
          Dashboard
          <h5>
            {this.props.auth
              ? this.props.auth.name + " is logged in"
              : "no user is logged in"}
          </h5>
          {this.props.auth && <button onClick={this.logout}>Logout</button>}
        </section>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutStore: () =>
      dispatch({
        type: "USER_LOGGED_OUT"
      })
  };
};

const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(dashboard);
export default Dashboard;
