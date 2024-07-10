import React, { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/shared/Loader";
import MUIDrawer from "../components/shared/MUI-Drawer";
import { DrawerData as initialDrawerData } from "../constants/sidebar-constant";

const DefaultLayout: React.FC = () => {
  const [drawerData] = useState(initialDrawerData);

  return (
    <>
      <MUIDrawer drawerData={drawerData}>
        <Suspense fallback={<Loader />}>
          <div className='root'>
            <Loader />
            <Outlet />
          </div>
        </Suspense>
      </MUIDrawer>
    </>
  );
};

export default DefaultLayout;
