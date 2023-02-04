import Head from "next/head";
import MessagesPage from "../components/MessagesPage";
import Page from "@/components/Page";

const Messages = () => {
  return (
    <div>
      <>
        <Page title="Messages">
          <MessagesPage />
        </Page>
      </>
    </div>
  );
};

export default Messages;
