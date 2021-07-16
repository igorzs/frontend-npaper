import React from "react";
//import logo from './logo.png';
import './App.css';
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

  /*>
  function App() {
  
    const [data, setData] = React.useState(null);
  
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
  */

  export default App;
