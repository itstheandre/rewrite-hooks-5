import React, { Component, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../services/auth";
import { useAuth } from "../hooks/useAuth";

function Signup2(props) {
  const { handleSubmit, username, password, message, handleChange } = useAuth(
    "signup",
    props.setUser,
    props.history
  );

  return (
    <>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username">Username: </Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            id="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password: </Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            id="password"
          />
        </Form.Group>
        {message && <Alert variant="danger">{message}</Alert>}
        <Button type="submit">Signup</Button>
      </Form>
    </>
  );
}

export default Signup2;

// export default class Signup extends Component {
//   state = {
//     username: "",
//     password: "",
//     message: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const { username, password } = this.state;

//     signup(username, password).then((data) => {
//       if (data.message) {
//         this.setState({
//           message: data.message,
//           username: "",
//           password: "",
//         });
//       } else {
//         this.props.setUser(data);
//         this.props.history.push("/projects");
//       }
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2>Signup</h2>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group>
//             <Form.Label htmlFor="username">Username: </Form.Label>
//             <Form.Control
//               type="text"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//               id="username"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label htmlFor="password">Password: </Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               id="password"
//             />
//           </Form.Group>
//           {this.state.message && (
//             <Alert variant="danger">{this.state.message}</Alert>
//           )}
//           <Button type="submit">Signup</Button>
//         </Form>
//       </>
//     );
//   }
// }
