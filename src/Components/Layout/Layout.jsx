import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full bg-gradient-to-b from-purple-100 to-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
