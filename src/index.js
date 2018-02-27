import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';


function render(Component) {
    ReactDOM.render(
        <AppContainer>
        <Component />
        </AppContainer>,
        document.getElementById('root'));
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {render(App)});
}
registerServiceWorker();