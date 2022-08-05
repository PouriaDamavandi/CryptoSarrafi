import { useEffect, useState } from "react";

//API
import { getCoins } from "../services/api";

// Components
import Loader from "./Loader";

const Landing = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      setCoins(data);
    };
    fetchAPI();
  }, []);

  const [coins, setCoins] = useState([]);

  return (
    <>
      <input type="text" placeholder="Search" />
      {coins.length ? (
        <div>
          {coins.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
