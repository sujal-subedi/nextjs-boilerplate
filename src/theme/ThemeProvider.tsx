import { ChakraProvider } from "@chakra-ui/react"
import theme from './'

const ThemeProvider = ({children}: any): JSX.Element =>{
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}


export default ThemeProvider;