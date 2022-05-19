import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Coin.css';
import Coin from './Coin'
import { Row, Col } from 'react-bootstrap';

function DashBoard() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.binance.com/api/v3/ticker/price')
      .then(res => {
        setCoins(res.data)
        console.log(res)
      })
      .catch(error => console.log(error))
	  
	  let response = axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
	console.log(response)
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  // function that allows us to filter coins and displays what we type in
  // make everything we type in to match with search by lowercasing both sides
  const filteredCoins = coins.filter(coin =>
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="coin-app" id="coin-app">
      <Row style={{ marginLeft: '70%' }}>

        <Col>
          <div className="coin-search">
            <h1 className="coin-text">Search a currency:</h1>
            <form>
              <input type="text" placeholder="Search" className="coin-input" disabled={true} onChange={handleChange} />
            </form>
          </div>
        </Col>

      </Row>
      {/* map through coins and display values here */}
      {filteredCoins.map(coin => {
        return (
          <Coin
            // key={coin.id}
            // name={coin.name}
            // image={coin.image}
            symbol={coin.symbol}
            // marketcap={coin.market_cap}
            price={coin.price}
            // priceChange={Math.round(coin.price_change_percentage_24h * 100) / 100}
            // volume={coin.total_volume}
          />)
      })}
    </div>
  );
}

export default DashBoard;
