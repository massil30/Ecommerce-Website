import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // <-- make sure this import exists

createRoot(document.getElementById('root')).render(<App />)
