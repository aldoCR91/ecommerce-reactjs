import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
//import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { CheckingAuth } from "../components/checkingAuth/CheckingAuth";
import CheckOutPage from "../pages/CheckOutPage";
import HomePage from "../pages/HomePage";
import {LoginPage} from "../pages/LoginPage";
import {LogupPage} from "../pages/LogupPage";
//import { useCheckAuth } from '../hooks';

//import { createBrowserRouter } from "react-router-dom"

export const AppRouter = () => {

    const status = useCheckAuth();
  //const authStatus = "authenticated"; // 'authenticated'; // 'not-authenticated';

  if ( status === 'checking' ) {
    return <CheckingAuth />
  }


  return (
    <Routes>

      {status === "authenticated"
        ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path='/*' element={ <Navigate to='/' />  } />
            </>
          )  
          :
          (
            <>
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/logup" element={<LogupPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
            </>
          )
      }
      
      {/*<Route path='/*' element={ <Navigate to='/auth/login' />  } /> */}

    </Routes>
  );
};