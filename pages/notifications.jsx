import Head from "next/head";
import NotificationsPage from "../components/NotificationsPage";
import Page from "@/components/Page";

const Notifications = () => {
  return (
    <div>
      <>
        <Page title="Notifications">
          <NotificationsPage />
        </Page>
      </>
    </div>
  );
};

export default Notifications;
