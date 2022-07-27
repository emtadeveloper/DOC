/*

import React, { useState } from "react";

const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function App() {
  //

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);

  const submitIsDisabled = !!emailError || !!passwordError || !emailIsTouched || !passwordIsTouched
   
  const handleEmailChange = (e: any) => {
    const input = e.target.value;
    setEmail(input);
  };

  const handleEmailBlur = (e: any) => {
    if (!email.length) {
      setEmailError("This field is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Must be a valid email !");
    } else {
      setEmailError("");
    }
    setEmailIsTouched(true);
  };

  const handlePasswordChange = (e: any) => {
    const input = e.target.value;
    setPassword(input);
  };

  const handlePasswordBlur = (e: any) => {
    if (!password.length) {
      setPasswordError("This field is required");
    } else if (password.length < 8) {
      setPasswordError("password must be at least 8 characters !");
    } else {
      setPasswordError(" ");
    }
    setPasswordIsTouched(true);
  };

  const handleReset = (e: any) => {
    e.preventDefault()
    setEmail("");
    setPassword("");
    setPasswordError("");
    setEmailError("");
    setPasswordIsTouched(false)
    setEmailIsTouched(false)
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Email : ${email} Password : ${password}`);
  };

console.log(submitIsDisabled,"====")

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email : </label>
          <input
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
            autoComplete='off'
            type='text'
            name='email'
            value={email}
          />
          <span>{emailError}</span>
        </div>
        <div>
          <label htmlFor='password'>Password : </label>
          <input
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
            autoComplete='off'
            type='text'
            name='password'
            value={password}
          />
          <span>{passwordError}</span>
        </div>
        <button disabled={!submitIsDisabled} type='submit'>
          Submit
        </button>
        <button onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default App;



*/