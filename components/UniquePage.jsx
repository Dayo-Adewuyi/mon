import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";

const UniquePage = ({ title, description, children }) => {
  const editTitle = title?.includes(undefined) ? "loading..." : title;
  return (
    <>
      <Head>
        <title>{editTitle ? `${editTitle}` : "Coterie"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <div className="w-screen flex justify-center bg-[#f1f1f1] min-h-screen">
        <div className="flex w-[1320px] mx-auto">
          <div className="w-[30%]">
            <Sidebar />
          </div>
          <div className="w-[70%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default UniquePage;
