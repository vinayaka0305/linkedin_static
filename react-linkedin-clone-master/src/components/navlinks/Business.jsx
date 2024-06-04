import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Business.module.css";
import {

  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  getArrayOfOptions,
  getArrayOfProducts,
} from "../../utils/getBusinessLinks";
import NavLinks from "../navbar/NavLinks";
import { useNavigate } from "react-router-dom";

export const Business = ({setShowModal,showModal}) => {

  const arrayOfProducts = getArrayOfProducts();
  const arrayOfOptions = getArrayOfOptions();

  const navigate = useNavigate();

  const handleClickX = (e) =>{
    navigate("/");
    setShowModal(!showModal);
  }

  return (
    <div className={styles.businessModal} id="business-modal">
      <div className={styles.businessCardContainer}>
        <header>
          <h2>For Business</h2>
          <FontAwesomeIcon icon={faXmark} onClick={handleClickX}/>
        </header>
        <main>
          <section>
            <h3>Visit More LinkedIn Products</h3>
            <div className={styles.productsContainer}>
              {arrayOfProducts.map(({ icon, meaning }, i) => {
                return (
                  <div key={i}>
                    <FontAwesomeIcon icon={icon} />
                    <p>{meaning}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <section>
            <h3>Explore more for business</h3>
            <div className={styles.optionsContainer}>
              {arrayOfOptions.map(({ heading, benefit }, i) => {
                return (
                  <p key={i}>
                    {heading}
                    <span>{benefit}</span>
                  </p>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
