import React from "react";

const MainWrapper = ({ children }) => {
  return (
    <main className="main-wrapper">
      <section className="container">{children}</section>
    </main>
  );
};

export default MainWrapper;
