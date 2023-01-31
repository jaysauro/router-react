import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/messages.module.scss";

export default function Messages() {
  let { messages } = useParams();
  const navigate = useNavigate();
  console.log(messages);

  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/quotes/${messages}`)
      .then((res) => res.json())
      .then((data) => setQuoteData(data));
  }, [messages]);

  

  const onClickPrevBtn = () => navigate(`/messages/${--messages}`);
  const onClickNextBtn = () => navigate(`/messages/${++messages}`);


  return (
    <div className={styles.Message} id={quoteData.id}>
      <div className={styles.content}>
        <h3>{quoteData.quote}</h3>
        <p>{quoteData.author}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={() => navigate("/")}>To Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div>
    </div>
  );
}
