import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../utils/HTTP";
import Card from "../components/card";
import styles from "./styles/Utent.module.scss";

export default function User() {
  const params = useParams();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    GET(`users/${params.userId}`).then((data) => setUserData(data));
  }, []);

  return (
    <>
      <div className={styles.User}>
        <Card userData={userData} />
        <Link to="/users">Ritorna alla lista utenti</Link>
      </div>
      <Outlet />
    </>
  );
}