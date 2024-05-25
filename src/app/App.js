

import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './utilities/routes.js';
import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './components/login/index.jsx';
// import { SignUp } from './components/signup/index.jsx';
import { AcademicsForm, ConfirmEmail, EmailComfirmed, GoalsForm, InfoForm, PreferencesForm, Terms } from './components/signup/signUpComp.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  // {
  //   path: routes.signUp(),
  //   element: <SignUp/>
  // },
  {
    path: routes.personalInfo(),
    element: <InfoForm/>
  },
  {
    path: routes.academics(),
    element: <AcademicsForm/>
  },
  {
    path: routes.preferences(),
    element: <PreferencesForm/>
  },
  {
    path: routes.goals(),
    element: <GoalsForm/>
  },
  {
    path: routes.terms(),
    element: <Terms/>
  },
  {
    path: routes.confirmEmail(),
    element: <ConfirmEmail/>
  },
  {
    path: routes.emailConfirmed(),
    element: <EmailComfirmed/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  }
])
function App() {
  // const [info, setInfo] = React.useState({})
  return (
    <>
      <ChakraProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
