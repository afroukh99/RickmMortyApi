import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./sass/index.scss"
import FilterContextProvider from './context/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilterContextProvider>
    <App />
    </FilterContextProvider>
  </StrictMode>,
)
