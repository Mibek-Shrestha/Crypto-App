
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CoinDetails from "./components/CoinDetails";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";

function App() {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coindetails' element={<CoinDetails />} />


      </Routes>
    </Router>
  )
}

export default App;
