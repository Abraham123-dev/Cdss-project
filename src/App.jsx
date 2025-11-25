import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

