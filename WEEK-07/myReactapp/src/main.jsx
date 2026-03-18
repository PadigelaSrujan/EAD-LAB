import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Components/Hello.jsx';
import Counter from './Components/Counter.jsx'
import Timer from './Components/Timer'
import Greet from './Components/Greet'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
    <Timer />
    <Greet /> 
  </StrictMode>,
)
