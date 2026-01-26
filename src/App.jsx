import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './sign';
import SignIn from './SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp onLogin={() => console.log('Sign up successful')} onSwitchToSignIn={() => console.log('Switching to sign in')} />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

