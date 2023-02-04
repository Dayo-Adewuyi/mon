import Head from "next/head";
import ProfilePage from "../components/ProfilePage";
import Page from "@/components/Page";

const Profile = () => {
  return (
    <div>
      <>
        <Page title="Profile">
          <ProfilePage />
        </Page>
      </>
    </div>
  );
};

export default Profile;
