import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home/App.tsx'
import { GlobalStyle } from './globalstyle.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
