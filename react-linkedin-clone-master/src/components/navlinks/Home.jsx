import { useContext } from "react";
import DiscoverMore from "../home/DiscoverMore";
import Footer from "../home/Footer";
import { Newpost } from "../home/Newpost";
import News from "../home/News";
import { Posts } from "../home/Posts";
import PremiumCard from "../home/PremiumCard";
import { ProfileCard } from "../home/ProfileCard";
import { AuthContext } from "../../App";
import styles from '../../styles/home/Home.module.css'

export const Home = () => {
  const {darkTheme} = useContext(AuthContext);
  return (
    <div className={styles.home}>
      <div className={styles.leftPortion}>
        <ProfileCard />
        <DiscoverMore/>
      </div>
      <div className={styles.centerPortion}>
        <Newpost />
        <div className={styles.sortBy} style={{backgroundColor:darkTheme?"#ffffff33":"#00000033"}}></div>
        <Posts />
      </div>
      <div className={styles.rightPortion}>
        <News />
        <PremiumCard/>
        <Footer />
      </div>
    </div>
  );
};
