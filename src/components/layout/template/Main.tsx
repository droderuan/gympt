import React from "react";

interface MainTemplate {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplate> = ({ children }) => {
  return (
    <>
      <header className="h-28  md:h-60">
        <div className="m-auto flex h-full max-w-xl items-center p-3 md:max-w-4xl xl:max-w-7xl">
          <h1 className="text-6xl font-medium lg:text-8xl">GymPT</h1>
        </div>
      </header>
      <div className="m-auto max-w-xl pt-3 md:max-w-4xl xl:max-w-7xl">
        {children}
      </div>
    </>
  );
};

export default MainTemplate;
