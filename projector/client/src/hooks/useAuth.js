import { useState } from "react";
import { signup, login } from "../services/auth";

export function useAuth(goal, setUser, history) {
  const initialState = {
    username: "",
    password: "",
    message: "",
  };
  const [signupForm, setSignupForm] = useState(initialState);
  const { username, password, message } = signupForm;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = signupForm;

    let resp;
    if (goal === "login") {
      resp = await login(username, password);
    } else {
      resp = await signup(username, password);
    }

    const { data } = resp;

    if (data.message) {
      setSignupForm({ ...initialState, message: data.message });
    } else {
      setUser(data);
      history.push("/projects");
    }
  };

  return {
    handleSubmit,
    handleChange,
    username,
    password,
    message,
  };
}
