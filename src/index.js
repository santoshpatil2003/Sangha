import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import {
//   // createBrowserRouter,
//   // RouterProvider,
//   // Route,
//   // Link,
// } from "react-router-dom";
import App from './App'
// import {router} from './App'
// import LogIn from './components/LogIn';
// import InsideHome from './components/InsideHome';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <RouterProvider router={router} />
// );
root.render(
  <React.StrictMode>
     <App></App>
    {/* <LogIn></LogIn>
    <InsideHome></InsideHome> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
