import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import HomePage from "../pages/profile";
import CustomLayout from "../components/layout";
import { ChangePassword } from "../pages/auth/ChangePassword";
import { EditProfile } from "../pages/profile/editProfile";
import { PATH } from "../constant";
import SchedulerPage from "../pages/scheduler";

interface IRouter {
  path: string;
  element: React.ReactNode;
}

const router: Array<IRouter> = [
  {
    path: PATH.login,
    element: <LoginPage />,
  },
  {
    path: PATH.register,
    element: <RegisterPage />,
  },
  {
    path: PATH.home,
    element: (
      <CustomLayout openKey="1">
        <HomePage />
      </CustomLayout>
    ),
  },
  {
    path: PATH.changePassword,
    element: (
      <CustomLayout openKey="1">
        <ChangePassword />
      </CustomLayout>
    ),
  },
  {
    path: PATH.editProfile,
    element: (
      <CustomLayout openKey="1">
        <EditProfile />
      </CustomLayout>
    ),
  },

  {
    path: PATH.schedule,
    element: (
      <CustomLayout openKey="2">
        <SchedulerPage />
      </CustomLayout>
    ),
  },
];
function RenderRouter(): JSX.Element {
  return (
    <Routes>
      {router.map((item: IRouter) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
}
export default RenderRouter;
