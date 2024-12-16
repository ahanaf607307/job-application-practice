import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Routes/Router'
import AuthProvider from './Pages/Auth/Firebase/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router}/>
</AuthProvider>
  </StrictMode>,
)