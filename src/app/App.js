
import React from 'react';
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
import { ReferDashboard } from './components/dashboard/Refer.jsx';
import { Classes } from './components/dashboard/Classes.jsx';
import { UpcomingDashboard } from './components/dashboard/Upcoming.jsx';
import { Reschedule } from './components/dashboard/Reschedule.jsx';
import { Feedback } from './components/dashboard/Feedback.jsx';
import { SettingsDashboard } from './components/dashboard/Settings.jsx';
import { LoginSettings } from './components/dashboard/LoginSettings.jsx';
import { AddNewDashboard} from './components/dashboard/Add.jsx';
import { AssignmentDashboard } from './components/dashboard/Assignments.jsx';
import { ManageTutors, TutorDashboard } from './components/dashboard/Tutor.jsx';
import { StyledEngineProvider } from '@mui/material/styles';
import { createContext } from 'react';
import { tutors } from '../app/components/dashboard/data.js';
import { MobilePayment } from './components/dashboard/Payment.jsx';

export const GlobalContext = createContext()


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: routes.login(),
    element: <Login />
  },
  {
    path: routes.personalInfo(),
    element: <InfoForm />
  },
  {
    path: routes.academics(),
    element: <AcademicsForm />
  },
  {
    path: routes.preferences(),
    element: <PreferencesForm />
  },
  {
    path: routes.goals(),
    element: <GoalsForm />
  },
  {
    path: routes.terms(),
    element: <Terms />
  },
  {
    path: routes.confirmEmail(),
    element: <ConfirmEmail />
  },
  {
    path: routes.emailConfirmed(),
    element: <EmailComfirmed />
  },
  {
    path: routes.tutorPersonalInfo(),
    element: <Form1 />
  },
  {
    path: routes.tutorAcademics(),
    element: <Form2 />
  },
  {
    path: routes.tutorPreferences(),
    element: <Form3 />
  },
  {
    path: routes.tutorTerms(),
    element: <Form5 />
  },
  {
    path: routes.tutorConfirmEmail(),
    element: <ConfirmEmail />
  },
  {
    path: routes.tutorEmailConfirmed(),
    element: <ConfirmEmail />
  },
  {
    path: routes.style(),
    element: <TeachingStyleForm />
  },
  {
    path: routes.upload(),
    element: <Upload />
  },
  {
    path: routes.dashboard(),
    element: <Overview />
  },
  {
    path: routes.overview(),
    element: <Overview />
  },
  {
    path: routes.progress(),
    element: <ProgressDashboard />
  },
  {
    path: routes.notification(),
    element: <NotificationDashboard />
  },
  {
    path: routes.refer(),
    element: <ReferDashboard />
  },
  {
    path: routes.classes(),
    element: <Classes />
  },
  {
    path: routes.upcoming(),
    element: <UpcomingDashboard />
  },
  {
    path: routes.reschedule(),
    element: <Reschedule />
  },
  {
    path: routes.feedback(),
    element: <Feedback />
  },
  {
    path: routes.profileSettings(),
    element: <SettingsDashboard />
  },
  {
    path: routes.loginSettings(),
    element: <LoginSettings />
  },
  {
    path: routes.addDashboard(),
    element: <AddNewDashboard />
  },
  {
    path: routes.assignmentDashboard(),
    element: <AssignmentDashboard />
  },
  {
    path: routes.submitAssignment(),
    element: <AssignmentDashboard />
  },
  {
    path: routes.manageTutor(),
    element: <ManageTutors />
  },
  {
    path: routes.tutorDashboard(),
    element: <TutorDashboard />
  },
  {
    path: routes.paymentDashboard(),
    element: <MobilePayment/>
  },
  {
    path: '*',
    element: <h1>404</h1>
  },
  // {
  //   path: routes.summary(),
  //   element: <Feedback/>
  // },


])
function App() {
  // const [info, setInfo] = React.useState()
  const globalData ={tutors}
  // console.log(globalData.tutors)
  // setInfo(g)
  return (
    <>
      {/* <ChakraProvider>
        <StyledEngineProvider injectFirst> */}
      <GlobalContext.Provider value={globalData.tutors}>

        <ToastContainer />
        <RouterProvider router={router} />
      </GlobalContext.Provider>
      {/* </StyledEngineProvider>
      </ChakraProvider> */}

    </>
  );
}

export default App;
