import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './redux/store';
import App from './App';
import router from './routers/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <RouterProvider router={router}/>
  </Provider>
  
  
);
