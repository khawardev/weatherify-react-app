import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import Contextapi from './context/Contextapi.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Contextapi>
  <App />
  </Contextapi>
)
