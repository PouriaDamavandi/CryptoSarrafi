import styles from "./Coin.module.css"


const Coin = ({
  name,
  image,
  symbol,
  currentPrice,
  high24h,
  low24h,
  marketcap,
  priceChange,
}) => {
  return (
    <div className={styles.container} >
      <img src={image} alt={name} className={styles.image}/>
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>{currentPrice.toLocaleString()}</span>
      <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange}</span>
      <span className={styles.greenPriceChange}>{high24h.toLocaleString()}</span>
      <span className={styles.redPriceChange}>{low24h.toLocaleString()}</span>
      <span className={styles.symbol}>{marketcap.toLocaleString()}</span>
  
    </div>
  );
};

export default Coin;
