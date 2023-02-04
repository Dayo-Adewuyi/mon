import Head from "next/head";
import MessagesPage from "../components/MessagesPage";
import Page from "@/components/Page";
import UniquePage from "@/components/UniquePage";

const Messages = () => {
  return (
    <div>
      <>
        <UniquePage title="Messages">
          <MessagesPage />
        </UniquePage>
      </>
    </div>
  );
};

export default Messages;
