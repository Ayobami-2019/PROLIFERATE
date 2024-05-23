

import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './utilities/routes.js';
import { ChakraProvider } from '@chakra-ui/react'
import { Login } from './components/login/index.jsx';
import { SignUp } from './components/signup/index.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: routes.signUp(),
    element: <SignUp/>
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
