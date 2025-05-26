import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen justify-center w-full items-center">
      {children}
    </main>
  );
};

export default Layout;
