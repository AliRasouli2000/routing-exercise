/*
 * Copyright (c) 2024 [Ali Rasouli]. All Rights Reserved.
 * This code is proprietary and confidential. Unauthorized use is prohibited.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
