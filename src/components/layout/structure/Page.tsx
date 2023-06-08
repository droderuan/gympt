import React from "react";

interface Page {
  children: [React.ReactNode, React.ReactNode];
}

const Page: React.FC<Page> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 px-2 lg:flex-row">
      <div className="flex-1">{children[0]}</div>
      <div className="flex-1">{children[1]}</div>
    </div>
  );
};

export default Page;
