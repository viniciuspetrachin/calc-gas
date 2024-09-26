import React, { useState } from 'react';
import './App.css';

function App() {
  const [distance, setDistance] = useState(80); // Distância diária em km
  const [fuelPrice, setFuelPrice] = useState(5.8); // Preço do combustível por litro
  const [consumption, setConsumption] = useState(32); // Consumo do carro em km/l

  // Função para calcular o custo diário
  const calculateDailyCost = () => {
    const dailyConsumption = distance / consumption;
    const dailyCost = dailyConsumption * fuelPrice;
    return dailyCost.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Função para calcular o custo por km
  const calculateCostPerKm = () => {
    const costPerKm = fuelPrice / consumption;
    return costPerKm.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Função para calcular o consumo em litros por km
  const calculateLitersPerKm = () => {
    const litersPerKm = 1 / consumption;
    return (litersPerKm * 10).toFixed(2)
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Calculadora de Custo de Combustível</h1>

          <div className="input-group">
            <label>Distância diária (km):</label>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Preço do combustível (R$/litro):</label>
            <input
              type="number"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Consumo do carro (km/l):</label>
            <input
              type="number"
              value={consumption}
              onChange={(e) => setConsumption(Number(e.target.value))}
            />
          </div>

          <div className="result">
            <h4>Custo diário: R$ {calculateDailyCost()}</h4>
            <h4>Custo por km: R$ {calculateCostPerKm()}</h4>
            <h4>Litros por km: {calculateLitersPerKm()}L/km</h4>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
