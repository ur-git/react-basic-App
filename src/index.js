//React library import
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; //omit file extension when importing JS files

//tells react where this UI should be placed in web page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
