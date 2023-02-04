import React, { useState } from "react";
import MessageBody from "./MessageBody";
import MessageHead from "./MessageHead";

const MessagesPage = () => {
  return (
    <div className=" flex border-l border-r w-full">
      <div className="w-[35%]">
        <MessageHead />
      </div>
      <div className="w-[65%]">
        <MessageBody />
      </div>
    </div>
  );
};

export default MessagesPage;
