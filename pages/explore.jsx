import Head from "next/head";
import ExplorePage from "../components/ExplorePage";
import Page from "@/components/Page";

const Explore = () => {
  return (
    <div>
      <>
        <Page title="Profile">
          <ExplorePage />
        </Page>
      </>
    </div>
  );
};

export default Explore;
