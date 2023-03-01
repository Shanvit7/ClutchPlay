import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './redux/store';
import './index.css';

import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path:"/",
    element:(<Landing/>),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
)