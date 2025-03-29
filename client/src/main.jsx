import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App.jsx';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render( // Removed ReactDOM.createRoot
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
      </PersistGate>
    </Provider>
);
