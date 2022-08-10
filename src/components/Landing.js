import { useEffect, useState } from "react";

//API
import { getCoins } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

//css
import styles from "./Landing.module.css"

const Landing = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const [coins, setCoins] = useState([]);
  const [search, setSearch] =useState("");

  const searchHandler = event => {
    setSearch(event.target.value);
  }

  const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <input type="text" className={styles.input} placeholder="Search" value={search} onChange={searchHandler}/>
      {coins.length ? (
        <div className={styles.coinContainer}>
          {searchedCoins.map((coin) => ( <Coin 
           key={coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           currentPrice={coin.current_price}
           high24h={coin.high_24h}
           low24h={coin.low_24h}
           marketcap={coin.market_cap}
           priceChange={coin.price_change_percentage_24h}
           />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
