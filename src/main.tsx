import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'

import '@fontsource/andada-pro'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ChakraProvider theme={theme}> */}
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>,
)
