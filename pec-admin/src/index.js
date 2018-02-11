import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>,
  document.getElementById('root'));
registerServiceWorker();
