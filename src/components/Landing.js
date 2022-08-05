import { useEffect, useState } from "react";

//API 
import { getCoins } from "../services/api";


const Landing = () => {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoins();
      console.log(data);
    }
      fetchAPI();
    ;
  },[]);

  return <div>Landing Page</div>;
};


export default Landing;