import { ChakraProvider } from '@chakra-ui/react'
import { SiteConfigProvider } from '../store/SiteConfig/SiteConfigProvider'
import DefaultTheme from '../Theme/DefaultTheme'

function MyApp({ Component, pageProps }) {
  return (<ChakraProvider theme={DefaultTheme}>
    <SiteConfigProvider>
      <Component {...pageProps} />
    </SiteConfigProvider>
  </ChakraProvider>)
}

export default MyApp
