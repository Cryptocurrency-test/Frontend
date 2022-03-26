import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Coin from './Coin'
import { Row, Col } from 'react-bootstrap';

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // function that allows us to filter coins and displays what we type in
  // make everything we type in to match with search by lowercasing both sides
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="coin-app">
      <Row style={{ marginLeft: '70%' }}>

        <Col>
          <div className="coin-search">
            <h1 className="coin-text">Search a currency:</h1>
            <form>
              <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
            </form>
          </div>
        </Col>

      </Row>a

      {/* map through coins and display values here */}
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={Math.round(coin.price_change_percentage_24h * 100) / 100}
            volume={coin.total_volume}
          />)
      })}
    </div>
  );
}

export default App;
