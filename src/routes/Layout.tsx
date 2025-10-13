import * as React from 'react';
import {Header} from "@/layout";
import {Outlet} from "react-router/internal/react-server-client";


export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};