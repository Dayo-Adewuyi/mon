import Head from "next/head";
import LiveStreamsPage from "../components/LiveStreamsPage";
import Page from "@/components/Page";

const LiveStreams = () => {
  return (
    <div>
      <>
        <Page title="Messages">
          <LiveStreamsPage />
        </Page>
      </>
    </div>
  );
};

export default LiveStreams;
