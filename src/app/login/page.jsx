// Login.js
"use client";
import React from 'react';

import { signInWithPopup } from 'firebase/auth';
import { signInOrSignUpWithGoogle } from '@/firebase/auth/sign';
import styled from 'styled-components';


const Login = () => {
 

  const handleGoogleLogin = async () => {
    try {
        await signInOrSignUpWithGoogle();
    } catch (error) {
      console.error("Error al iniciar sesión con Google", error);
    }
  };

  return (
    <Container>
      <Form>
        <h2>Login</h2>
        <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
      </Form>
    </Container>
  );
};

export default Login;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4285F4;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #357ae8;
  }
`;