import React from 'react';
import styled from 'styled-components';
import Weather from './components/Weather';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #00b4db, #0083b0);
  padding: 20px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <AppContainer>
      <Title>Weather Forecast</Title>
      <Weather />
    </AppContainer>
  );
}

export default App; 