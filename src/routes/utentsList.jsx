import { useState, useEffect } from "react";
import {GET} from "../utils/HTTP";
import styles from "./styles/UtList.module.scss";

const UtentsList = () => {
  const [products, setProducts] = useState([]);
  const users = products.users;
  console.log(users);

  // const mappedUsers = users.map(function(element) {
  //   return `${element.firstName} ${element.lastName}`;
  // });
  // console.log(mappedUsers);

  // ---- NON FUNZIONA, DA UNDEFINED ----
  

  const reloadItems = () => {
    GET("users").then(data => {
      console.log(data);
      setProducts(data);;
    });
  };

  useEffect(() => {
    reloadItems();
  }, []);


  return (
    <div className={styles.utentList}>
      <ul className={styles.utents}>
      </ul>
    </div>
  );
};

export default UtentsList;