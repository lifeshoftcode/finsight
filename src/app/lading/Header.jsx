import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 4rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #0070f3;
  }

  p {
    margin: 1rem 0;
    font-size: 1.25rem;
    color: #666;
  }

  button {
    background-color: #0070f3;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #005bb5;
    }
  }
`;

function Header() {
    const router = useRouter();

    const handleGetStartedClick = () => {
      router.push('/login');
    };
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Finance App</h1>
        <p>The best way to manage your finances.</p>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
