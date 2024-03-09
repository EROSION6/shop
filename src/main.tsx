import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>,
);
