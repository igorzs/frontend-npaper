import React from "react";
//import logo from './logo.png';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes />
        <Footer />
      </BrowserRouter>
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
