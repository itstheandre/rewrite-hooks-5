import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import TaskDetails from "./components/TaskDetails";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App2(props) {
  const [user, setUser] = useState(props.user);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />

      <Route
        exact
        path="/projects"
        // component={Projects}
        render={(props) => {
          if (user) return <Projects {...props} />;
          else return <Redirect to="/" />;
        }}
      />

      {/* <ProtectedRoute
        exact
        path='/projects'
        // is an additional prop that is taken care of with ...rest
        foo='bar'
        user={user}
        component={Projects}
      /> */}

      <Route
        exact
        path="/projects/:id"
        render={(props) => <ProjectDetails user={user} {...props} />}
      />
      <Route exact path="/tasks/:id" component={TaskDetails} />
      <Route
        exact
        path="/signup"
        render={(props) => <Signup setUser={setUser} {...props} />}
      />
      <Route
        exact
        path="/login"
        render={(props) => <Login setUser={setUser} {...props} />}
      />
    </div>
  );
}

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
          exact
          path="/projects"
          // component={Projects}
          render={(props) => {
            if (this.state.user) return <Projects {...props} />;
            else return <Redirect to="/" />;
          }}
        />

        {/* <ProtectedRoute
          exact
          path='/projects'
          // this is an additional prop that is taken care of with ...rest
          foo='bar'
          user={this.state.user}
          component={Projects}
        /> */}

        <Route
          exact
          path="/projects/:id"
          render={(props) => (
            <ProjectDetails user={this.state.user} {...props} />
          )}
        />
        <Route exact path="/tasks/:id" component={TaskDetails} />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}
export default App;
