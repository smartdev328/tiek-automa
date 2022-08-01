import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import App from './App'
import { theme } from '../chakra.config'
import './index.css'

const queryClient = new QueryClient()
axios.defaults.withCredentials = true
axios.defaults.maxRedirects = 0
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/api'
} else {
  axios.defaults.baseURL = 'http://localhost:8080/api'
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
