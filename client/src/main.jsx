import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render( // Removed ReactDOM.createRoot
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
