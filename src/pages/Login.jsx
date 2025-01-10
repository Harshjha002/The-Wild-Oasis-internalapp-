import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from '../ui/Logo'
import { useState } from "react";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledDiv = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  color: #333;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  p {
    margin: 8px 0;
  }

  .label {
    font-weight: bold;
    color: #007bff;
  }

  .credentials {
    background-color: #e9ecef;
    padding: 10px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    color: #6c757d;
    display: inline-block;
    margin-right: 10px;
  }

  button {
    padding: 5px 10px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }
  }
`;

function Login() {
  const [copied, setCopied] = useState({ email: false, password: false });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [type]: true });
      setTimeout(() => setCopied({ ...copied, [type]: false }), 2000); // Reset after 2 seconds
    });
  };

  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <StyledDiv>
        <p>To explore the project, use the following credentials:</p>
        <p>
          <span className="label">Gmail:</span>
          <span className="credentials">Dummy@gmail.com</span>
          <button
            onClick={() => handleCopy('Dummy@gmail.com', 'email')}
            disabled={copied.email}
          >
            {copied.email ? 'Copied!' : 'Copy'}
          </button>
        </p>
        <p>
          <span className="label">Password:</span>
          <span className="credentials">dummypassword123</span>
          <button
            onClick={() => handleCopy('dummypassword123', 'password')}
            disabled={copied.password}
          >
            {copied.password ? 'Copied!' : 'Copy'}
          </button>
        </p>
      </StyledDiv>


    </LoginLayout>
  );
}

export default Login;
