import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { StateProvider } from './StateProvider';
import { initialState } from './Reducer';
import reducer from './Reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
);
