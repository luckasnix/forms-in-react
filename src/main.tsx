import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignupFormProvider } from '@/contexts/signup-form'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignupFormProvider>
      <App />
    </SignupFormProvider>
  </React.StrictMode>,
)
