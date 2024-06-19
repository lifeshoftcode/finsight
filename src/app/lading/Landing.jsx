

import Header from './Header';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';
import styled from 'styled-components';

export default function Landing() {
  return (
    <Container>
      <Header />
      <Features />
      {/* <Pricing /> */}
      <Footer />
    </Container>
  );
}
const Container = styled.div`

  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
