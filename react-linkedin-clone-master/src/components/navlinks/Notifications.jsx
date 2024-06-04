import FilterNotifications from "../notifications/FilterNotifications";
import NotificationsList from "../notifications/NotificationsList";
import ViewSettings from "../notifications/ViewSettings";
import PremiumCard from "../home/PremiumCard";
import Footer from "../home/Footer";

export const Notifications = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1.25pc",
        margin: "5rem 10% 0",
      }}
    >
      <ViewSettings />
      <div>
        <FilterNotifications />
        <NotificationsList />
      </div>
      <div>
        <PremiumCard />
        <Footer />
      </div>
    </div>
  );
};
