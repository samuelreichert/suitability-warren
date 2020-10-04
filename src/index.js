import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { StyleReset } from 'atomize';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
const engine = new Styletron();


ReactDOM.render(
  <React.StrictMode>
    {/* debug={debug} */}
    <StyletronProvider value={engine}  debugAfterHydration>
      <StyleReset />
      <App />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
