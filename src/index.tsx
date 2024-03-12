import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from './store';
import {App} from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
);
