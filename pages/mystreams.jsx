import Head from "next/head";
import MyStreamsPage from "../components/MyStreamsPage";
import Page from "@/components/Page";

const MyStream = () => {
  return (
    <div>
      <>
        <Page title="Messages">
          <MyStreamsPage />
        </Page>
      </>
    </div>
  );
};

export default MyStream;
