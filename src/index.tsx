import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Route';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
