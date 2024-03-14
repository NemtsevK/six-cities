import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions.ts';
import {App} from './components/app/app.tsx';
import {ErrorMessage} from './components/error-message/error-message.tsx';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <HelmetProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
