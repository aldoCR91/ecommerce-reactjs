import { Navigate, Route, Routes } from "react-router-dom";

import CheckOutPage from "../pages/CheckOutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import LogupPage from "../pages/LogupPage";

//import { createBrowserRouter } from "react-router-dom"

export const AppRouter = () => {
  const authStatus = "authenticated"; // 'authenticated'; // 'not-authenticated';

  return (
    <Routes>
      {authStatus === "not-authenticated" ? 
        {/*Rutas publicas */}
      (
        <>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/logup" element={<LogupPage />} />
          <Route path="/" element={<HomePage />} />
        </>
      ) 
      :
      {/*Rutas privadas */}
      (
        <>
          <Route path="/checkout" element={<CheckOutPage />} />
        </>
      )}

      <Route path="/*" element={<Navigate to="/" />} />

    </Routes>
  );
};

