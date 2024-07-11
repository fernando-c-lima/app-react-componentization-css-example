import Cars from "./components/Cars";
import "./App.css";

function App() {
  const myCars = [
    { id: 1, brand: "Lamborghini", color: "Amarela", km: 0 },
    { id: 2, brand: "Fiat", color: "Vermelho", km: 4420 },
    { id: 3, brand: "KIA", color: "Preto", km: 55560 },
  ];

  return (
    <div className="App">
      <h1>Challenge em CSS</h1>
      <div className="car-container"></div>

      {myCars.map((car) => (
        <Cars cars={car} />
      ))}
    </div>
  );
}

export default App;
