import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const WeatherInfo = styled.div`
  margin-top: 1.5rem;
`;

const Temperature = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const DetailItem = styled.div`
  text-align: center;
`;

const DetailLabel = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const DetailValue = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 0.2rem 0 0;
  font-weight: bold;
`;

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <WeatherCard>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
      </SearchContainer>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <WeatherInfo>
          <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
          <Description>{weather.weather[0].description}</Description>
          <Details>
            <DetailItem>
              <DetailLabel>Humidity</DetailLabel>
              <DetailValue>{weather.main.humidity}%</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Wind</DetailLabel>
              <DetailValue>{weather.wind.speed} m/s</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Pressure</DetailLabel>
              <DetailValue>{weather.main.pressure} hPa</DetailValue>
            </DetailItem>
          </Details>
        </WeatherInfo>
      )}
    </WeatherCard>
  );
};

export default Weather; 