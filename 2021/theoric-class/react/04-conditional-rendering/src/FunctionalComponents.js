import React from 'react';


export const UserGreeting = (props) => {
  return <h1>Welcome back!</h1>;
}

export const GuestGreeting = (props) => {
  return <h1>Please sign up.</h1>;
}

export const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

export const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}