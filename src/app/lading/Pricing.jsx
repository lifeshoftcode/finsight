import React from 'react';
import styled from 'styled-components';

const PricingContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const PricingOption = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  h3 {
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

function Pricing() {
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Choose Your Plan</h2>
    <PricingContainer>
      <PricingOption>
        <h3>Basic</h3>
        <p>Free</p>
        <p>Basic features to get you started.</p>
      </PricingOption>
      <PricingOption>
        <h3>Pro</h3>
        <p>$9.99/month</p>
        <p>Advanced features for serious users.</p>
      </PricingOption>
    </PricingContainer>
    </div>
  );
}

export default Pricing;
