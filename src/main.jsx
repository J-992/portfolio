import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename={"/portfolio/"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>);


