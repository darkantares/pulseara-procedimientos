import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalProvider } from './context/provider';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);