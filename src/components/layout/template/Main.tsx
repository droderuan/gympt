import React from "react";

interface MainTemplate {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplate> = ({ children }) => {
  return (
    <>
      <header className="h-28 bg-slate-300 md:h-32">
        <div className="m-auto flex h-full max-w-5xl items-center  p-3 md:max-w-lg">
          <h1 className="text-5xl font-medium sm:text-3xl">GymPT</h1>
        </div>
      </header>
      <div className="max-w-lgxl m-auto pt-3 md:max-w-3xl xl:max-w-7xl">
        {children}
      </div>
    </>
  );
};

export default MainTemplate;
