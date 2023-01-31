import { GET } from "../utils/HTTP";
import { useState, useEffect } from "react";
import Card from "../components/card";
import styles from "./styles/UtList.module.scss";

export default function UtentsList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    GET("users?limit=10").then(({ users }) => setUserList(users));
  }, []);

  return (
    <>
      <div className={styles.Users}>
        {userList.map((user) => (
          <Card userData={user} key={user.id} />
        ))}
      </div>
    </>
  );
}