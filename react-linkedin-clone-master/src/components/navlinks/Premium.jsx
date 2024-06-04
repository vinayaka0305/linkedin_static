import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Premium.module.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {
  getPremiumPageCards,
  getPremiumPagePhrases,
} from "../../utils/getPremiumPageData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PremiumPlansCard = ({ h1, p, h2, list, border }) => {
  const notify = () => toast.info("Under Construction!", { autoClose: 2000 });
  return (
    <div
      className={styles.premiumCard}
      style={{ borderTop: `8px solid ${border}` }}
    >
      <header>
        <h1 style={{ color: `${border}` }}>{h1}</h1>
        <p>{p}</p>
      </header>
      <section></section>
      <main>
        <ul>
          {h2 && <h2>{h2}</h2>}
          {list.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
        <button onClick={notify}>
          Learn more
          <ToastContainer />
        </button>
      </main>
    </div>
  );
};

export const Premium = () => {
  const navigate = useNavigate();
  const { header, sentenceOne, sentenceTwo } = getPremiumPagePhrases();
  const arrayOfPlanDetails = getPremiumPageCards();
  return (
    <div className={styles.premiumPage}>
      <nav>
        <FontAwesomeIcon icon={faLinkedin} onClick={() => navigate("/home")} />
        <Link to="/home">Back to LinkedIn.com</Link>
      </nav>
      <main>
        <h2>{header}</h2>
        <p>{sentenceOne}</p>
        <p>{sentenceTwo}</p>
      </main>
      <div className={styles.premiumCardContainer}>
        {arrayOfPlanDetails.map((data, i) => {
          return <PremiumPlansCard {...data} key={i} />;
        })}
      </div>
    </div>
  );
};
