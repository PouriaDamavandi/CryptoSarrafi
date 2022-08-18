//css
import styles from "./Loading.module.css"
//Gif
import Loading from "../assets/gif/Loading.gif";

const Loader = () => {


    return(
        <div className={styles.loadingContainer}>
            <img src={Loading} alt="loading" />
            <h1>Loading ...</h1>
        </div>
    )
}

export default Loader;