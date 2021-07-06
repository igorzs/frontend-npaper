import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  console.log(process.env.REACT_APP_API_URL);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+"/home")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Carregando..." : data}</p>
      </header>
    </div>
  );
}

export default App;
