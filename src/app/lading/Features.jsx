import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: 3rem 2rem;
  text-align: center;
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const Feature = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  h2 {
    margin-top: 0;
    font-size: 1.75rem;
    color: #333;
  }

  p {
    margin-bottom: 0;
    font-size: 1rem;
    color: #666;
  }
`;

function Features() {
  return (
    <Container>

    <FeaturesContainer>
      <Feature>
        <h2>Track Expenses</h2>
        <p>Keep track of all your expenses in one place.</p>
      </Feature>
      <Feature>
        <h2>Monitor Income</h2>
        <p>Monitor your income sources and see where your money comes from.</p>
      </Feature>
      <Feature>
        <h2>Set Budgets</h2>
        <p>Set budgets and stick to them to achieve your financial goals.</p>
      </Feature>
      <Feature>
        <h2>Save Money</h2>
        <p>Find opportunities to save money and grow your savings.</p>
      </Feature>
    </FeaturesContainer>
    </Container>
  );
}

export default Features;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;


`;