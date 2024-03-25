import React from 'react';
import ReactDOM from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {store} from './store';
import {checkAuthAction, fetchOffersAction, fetchFavoriteOffersAction} from './store/api-actions.ts';
import {App} from './components/app/app.tsx';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <HelmetProvider>
        <App/>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
