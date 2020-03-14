import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../Components/AuthForms';
import Login from "./Login";

function Signup(props) {
  const [isRegistered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let authUrl = "http://api-toolbox.herokuapp.com/api/auth/create";

  function postSignup() {
    axios.post(authUrl, {
      username,
      password,
      name
    }).then(result => {
      console.log(result.data);
      setRegistered(true);
    });
  }
  console.log(isRegistered);
  if (isRegistered) {
    return <Redirect to={{ pathname: "/login" }} />
  }

  return (  
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input 
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder="Full Name"
        />
        <Input
          type="username"
          value={username}
          onChange={e => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <Button onClick={postSignup}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;