import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.js';

function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />,
);
// ReactDOM.render(<Main />, document.getElementById('root'));
