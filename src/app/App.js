

import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './utilities/routes.js';
import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './components/login/index.jsx';
// import { SignUp } from './components/signup/index.jsx';
import { AcademicsForm, ConfirmEmail, EmailComfirmed, GoalsForm, InfoForm, PreferencesForm, Terms } from './components/signup/signUpComp.jsx';
import { Form1, Form2, Form3, Form4, Form5, TeachingStyleForm, Upload, } from './components/signup/TutorSignUp.jsx';
import { Overview } from './components/dashboard/Overview.jsx';
import { ProgressDashboard } from './components/dashboard/Progress.jsx';
import { NotificationDashboard } from './components/dashboard/Notification.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: routes.login(),
    element: <Login/>
  },
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
    path: routes.tutorPersonalInfo(),
    element: <Form1/>
  },
  {
    path: routes.tutorAcademics(),
    element: <Form2/>
  },
  {
    path: routes.tutorPreferences(),
    element: <Form3/>
  },
  {
    path: routes.tutorTerms(),
    element: <Form5/>
  },
  {
    path: routes.tutorConfirmEmail(),
    element: <ConfirmEmail/>
  },
  {
    path: routes.tutorEmailConfirmed(),
    element: <ConfirmEmail/>
  },
  {
    path: routes.style(),
    element: <TeachingStyleForm/>
  },
  {
    path: routes.upload(),
    element: <Upload/>
  },
  {
    path: routes.dashboard(),
    element: <Overview/>
  },
  {
    path: routes.overview(),
    element: <Overview/>
  },
  {
    path: routes.progress(),
    element: <ProgressDashboard/>
  },
  {
    path: routes.notification(),
    element: <NotificationDashboard/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  },
  
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
