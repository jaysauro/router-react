import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const Card = ({ userData }) => {
  const navigate = useNavigate();

  const { id, firstName, lastName, age, email } = userData;

  const onHandleClick = () => navigate(`/users/${id}`);

  return (
    <div
      onMouseUp={onHandleClick}
      className={styles.Card}
    >
      {id ? (
        <>
          <h3>{`${firstName} ${lastName}`}</h3>
          <p>{age}</p>
          <p>{email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;