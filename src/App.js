import './App.scss';
import CryptoExchange from './components/CryptoExchange';
import Navigation from './components/Navigation';
import CryptoTradingBot from './Pages/CryptoTradingBot';
// import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <CryptoTradingBot />
      <CryptoExchange />
    </div>
  );
}

export default App;
