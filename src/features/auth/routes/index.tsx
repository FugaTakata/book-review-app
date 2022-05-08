import { Route, Routes } from "react-router-dom";

import { SignIn } from "features/auth/routes/sign-in";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
    </Routes>
  );
};
